"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
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
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      label: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/categories", data)
      .then(() => {
        toast.success("Category created");
        router.push("/");
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
      <Link href="/categories">
        <Button>Back</Button>
      </Link>
      <h1>Create category</h1>

     <hr className="w-96" />

      <div>Label</div>
      <input
        id="label"
        type="text"
        disabled={isLoading}
        {...register("label")}
        placeholder="Label"
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
              errors["label"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default New;
