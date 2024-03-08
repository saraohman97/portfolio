"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "@/components/ui/heading";
import { IoIosArrowRoundBack } from "react-icons/io";
import ImageUpload from "@/components/ui/image-upload";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Behöver vara minst 2 karaktärer.",
  }),
  link: z.string().optional(),
  images: z.object({ url: z.string() }).array(),
});

const NewProject = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      link: "",
      images: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    axios
      .post("/api/projects", data)
      .then(() => {
        toast.success("Projekt skapad.");
        router.push("/dashboard/projects");
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
          title="Nytt projekt"
          description="Posta ett nytt projekt till portfolion."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/projects")}
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titel</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Länk</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bilder</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value.map((image) => image.url)}
                      disabled={isLoading}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      }
                      onRemove={(url) =>
                        field.onChange([
                          ...field.value.filter(
                            (current) => current.url !== url
                          ),
                        ])
                      }
                    />
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

export default NewProject;
