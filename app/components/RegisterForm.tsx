import Link from "next/link";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { registerUser } from "../actions";

const RegisterForm = () => {
  return (
    <form
      action={registerUser}
      className="w-full md:w-1/2 flex flex-col h-full  justify-start p-4 gap-4 bg-zinc-100/60"
    >
      <Input
        label="آدرس ایمیل"
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <Input
        label="نام کاربری"
        name="username"
        placeholder="mohammad hosein"
        type="text"
      />
      <Input
        label="کلمه عبور"
        name="password"
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

      <p className="text-darkGray">قوانین و مقررات</p>
    </form>
  );
};

export default RegisterForm;
