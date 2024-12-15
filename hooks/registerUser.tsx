import axios from "axios";
import { toast } from "./use-toast";
import { FormEvent } from "react";
import { redirect } from "next/navigation";

export const registerUser = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const phoneNumber = formData.get("PhoneNumber") as string;
  const firstname = formData.get("Firstname") as string;
  const lastname = formData.get("Lastname") as string;
  const password = formData.get("Password") as string;

  const headers = { "Content-type": "application/json" };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/register",
      {
        firstname,
        lastname,
        phoneNumber,
        password,
      },
      { headers }
    );

    if (response.status === 200) {
      toast({
        title: "خوش آمدید",
        description: "ثبت‌نام با موفقیت انجام شد.",
        variant: "success",
      });
      setTimeout(() => {
        redirect("/auth/signin");
      }, 1000);
    }
  } catch (error: any) {
    if (error.response?.status === 409) {
      // Handle 409 Conflict error
      toast({
        title: "خطا",
        description: "کاربری با این شماره تلفن قبلاً ثبت‌نام کرده است.",
        variant: "destructive",
      });
    } else {
      // Handle other errors
      toast({
        title: "خطا",
        description: "مشکلی رخ داده است. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    }
  }
};
