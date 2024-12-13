import Link from "next/link";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <form action="" className="form">
      <Input
        type="text"
        label="کد داتشجویی"
        placeholder="40057741054019"
        name="studentUID"
      />
      <Input
        type="password"
        label="رمزعبور"
        placeholder="********"
        name="password"
      />
      {/*forward user to register page  */}
      <div className="flex gap-x-2 text-sm">
        <p>حساب کاربری ندارید ؟</p>
        <Link className="font-semibold underline" href="/auth/signup">
          بسازید
        </Link>
      </div>
      {/* login option  */}
      <button
        className="w-full bg-darkBlue flex items-center justify-center py-2.5 rounded-lg text-white 
      hover:bg-success transition duration-200 mb-2"
      >
        <div className="flex items-center gap-x-1">
          <FcGoogle className="mb-1" />
          <p className="font-bold text-lg">Google</p>
        </div>
      </button>

      <PrimaryButton text="ورود" type="submit" customStyle="py-3" />
      <p className="text-darkGray">قوانین و مقررات</p>

      <div className="flex items-center justify-center w-full">
        <h2 className="text-xl text-darkGray font-bold select-none">کتابیار</h2>
      </div>
    </form>
  );
};

export default LoginForm;
