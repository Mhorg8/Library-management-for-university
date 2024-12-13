import Link from "next/link";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { registerUser } from "../actions";

const RegisterForm = () => {
  return (
    <form action={registerUser} className="form">
      <Input
        label="تفلن همراه"
        name="phoneNumber"
        placeholder="09334055539"
        type="text"
      />
      <Input
        label="کد دانشجویی"
        name="studentUid"
        placeholder="40057741054019"
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
