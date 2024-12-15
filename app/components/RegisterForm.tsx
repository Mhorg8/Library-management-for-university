"use client";
import Link from "next/link";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { registerUser } from "@/hooks/registerUser";

const RegisterForm = () => {
  return (
    <form onSubmit={registerUser} className="form">
      <Input
        label="نام"
        name="Firstname"
        placeholder="40057741054019"
        type="text"
      />
      <Input
        label="نام خانوادگی"
        name="Lastname"
        placeholder="40057741054019"
        type="text"
      />
      <Input
        label="تلفن همراه"
        name="PhoneNumber"
        placeholder="09334055539"
        type="text"
      />
      <Input
        label="کلمه عبور"
        name="Password"
        placeholder="********"
        type="password"
      />
      <div className="flex items-center gap-x-2 font-semibold text-darkGray text-sm">
        <p>حساب کاربری دارید ؟</p>
        <Link href="/auth/signin" className="text-black underline">
          ورود
        </Link>
      </div>
      <PrimaryButton
        type="submit"
        text="ایجاد"
        customStyle="py-3 active:bg-success"
      />
    </form>
  );
};

export default RegisterForm;
