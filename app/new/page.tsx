"use client";

import { categories } from "@/components/categories";
import CategoryInput from "@/components/inputs/category-input";
import ImageUpload from "@/components/inputs/image-upload";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const New = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      imageSrc: "",
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/posts", data)
      .then(() => {
        toast.success("Post created");
        router.push('/');
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h1>Write a new post</h1>
      <hr className="w-96" />

      <div>Chose a category</div>
      <div className="grid grid-cols-2 gap-10 w-fit">
        {categories.map((item) => (
          <div key={item.label}>
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
      <hr className="w-96" />

      <div>Upload an image</div>
      <div>
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
      <hr className="w-96" />

      <div>Title</div>
      <input
        id="title"
        type="text"
        disabled={isLoading}
        {...register("title")}
        placeholder="Name"
        className={`
            peer
            border
            rounded
            p-4
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
            w-96
            ${
              errors["name"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <hr className="w-96" />

      <div>Description</div>
      <input
        id="description"
        type="text"
        disabled={isLoading}
        {...register("description")}
        placeholder="Description"
        className={`
            peer
            border
            rounded
            p-4
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
            w-96
            ${
              errors["description"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <button
        className="bg-rose-500 p-2 w-fit rounded text-white font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default New;