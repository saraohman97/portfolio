"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Behövs en giltig emailaddress.",
  }),
  password: z.string().min(2, {
    message: "Behövs ett giltigt lösenord.",
  }),
});

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "./ui/label";

const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback: any) => {
      setIsLoading(false);

      if (callback?.ok) {
        toggleModal();
        router.push("/dashboard/journal");
        router.refresh();
        toast.success("Inloggad");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <Button variant="default" className="max-sm:m-3">Login</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[280px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Logga in</DialogTitle>
          <DialogDescription>Anhörig personal endast.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input placeholder="test@test.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Lösenord
                </Label>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input placeholder="*****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <div className="flex items-center justify-end sm:w-full">
                <Button type="submit" disabled={isLoading}>
                  Logga in
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
