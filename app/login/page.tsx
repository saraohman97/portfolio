"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback: any) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-72 gap-4 items-center justify-center h-full mx-auto"
    >
      <h1 className="text-xl mt-24 mb-8">Login</h1>

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
            w-full
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
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
            w-full
            disabled:opacity-70
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

export default LoginPage;
