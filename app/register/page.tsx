"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registration completted.");
      })
      .catch((error: any) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-72 gap-4 items-center justify-center h-full mx-auto"
    >
      <h1 className="text-xl mt-24 mb-8">Sign in</h1>
      <input
        id="name"
        type="text"
        disabled={isLoading}
        {...register("name")}
        placeholder="Name"
        className={`
            peer
            border
            rounded
            p-4
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
            w-full
            ${
              errors["name"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <input
        id="email"
        type="text"
        disabled={isLoading}
        {...register("email")}
        placeholder="Email"
        className={`
            peer
            border
            rounded
            p-4
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
            w-full
            ${
              errors["email"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <input
        id="password"
        type="text"
        disabled={isLoading}
        {...register("password")}
        placeholder="Password"
        className={`
            peer
            border
            rounded
            p-4
            outline-none
            disabled:opacity-70
            w-full
            disabled:cursor-not-allowed
            ${
              errors["password"]
                ? "border-2 border-red-500 placeholder-red-500"
                : "border-neutral-300"
            }
            `}
      />
      <button
        type="submit"
        className="bg-rose-500 p-4 rounded text-white font-semibold w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterPage;
