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
import { Category } from "@prisma/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ImageUpload from "@/components/ui/image-upload";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface NewProps {
  categories: Category[];
}

const frameworks = [
  {
    label: "NextJS",
  },
  {
    label: "ReactJS",
  },
];

const schemas = [
  {
    label: "Prisma",
  },
  {
    label: "Mongoose",
  },
];

const databases = [
  {
    label: "MongoDB",
  },
  {
    label: "MySQL",
  },
];

const css = [
  {
    label: "Tailwind",
  },
  {
    label: "VanillaCSS",
  },
];

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Behöver vara minst 2 karaktärer.",
  }),
  description: z.string().optional(),
  text: z.string().min(2, {
    message: "Behöver vara minst 2 karaktärer.",
  }),
  imageDescription: z.string().optional(),
  favorite: z.boolean(),
  category: z.string().optional(),
  framework: z.string().optional(),
  schema: z.string().optional(),
  database: z.string().optional(),
  css: z.string().optional(),
  images: z.object({ url: z.string() }).array(),
});

const New = ({ categories }: NewProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    title: "",
    description: "",
    text: "",
    imageDescription: "",
    category: "",
    framework: "",
    database: "",
    schema: "",
    css: "",
    favorite: false,
    images: [],
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .post("/api/posts", data)
      .then(() => {
        toast.success("Post skapad.");
        router.push("/dashboard/journal");
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
          title="Ny artikel"
          description="Skriv ett nytt inlägg till jornalen."
          center
        />
        <Button
          variant="link"
          onClick={() => router.push("/dashboard/journal")}
          className="self-end"
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beskrivning</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
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

            <FormField
              control={form.control}
              name="imageDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bild beskrivning</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel>Badges</FormLabel>
              <div className="grid grid-cols-2 gap-y-10 border rounded p-6">
                <FormField
                  control={form.control}
                  name="framework"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Frameworks</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="flex flex-col space-y-1"
                        >
                          {frameworks.map((item) => (
                            <FormItem
                              key={item.label}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item.label} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="database"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Databas</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="flex flex-col space-y-1"
                        >
                          {databases.map((item) => (
                            <FormItem
                              key={item.label}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item.label} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="schema"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Schema</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="flex flex-col space-y-1"
                        >
                          {schemas.map((item) => (
                            <FormItem
                              key={item.label}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item.label} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="css"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>CSS</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          className="flex flex-col space-y-1"
                        >
                          {css.map((item) => (
                            <FormItem
                              key={item.label}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item.label} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {categories.length !== 0 && (
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Kategorier</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            className="flex flex-col space-y-1"
                          >
                            {categories.map((item) => (
                              <FormItem
                                key={item.label}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem value={item.label} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
            <FormField
              control={form.control}
              name="favorite"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4 py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      //ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="pb-2">Favoritisera</FormLabel>
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
