"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import Heading from "@/components/ui/heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  label: z.string().min(2, {
    message: "Behöver vara minst 2 karaktärer.",
  })
});

const New = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    axios
      .post("/api/categories", data)
      .then(() => {
        toast.success("Kategori skapad.");
        router.push("/dashboard/categories");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong trying to save product to db.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Ny kategori"
          description="Skapa en kategori att använda i Journalen."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/categories")}
          className="self-end max-sm:mt-10"
        >
          <IoIosArrowRoundBack size={24} className="mr-2" /> Gå tillbaka
        </Button>
      </div>

      {/* product form */}
      <div className="max-w-96 mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end w-full pb-20">
              <Button type="submit">Skicka</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default New;
