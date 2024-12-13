import Image from "next/image";
import formImage from "@/public/libary-1.jpg";
import LoginForm from "@/app/components/LoginForm";

const SigninPage = () => {
  return (
    <div className="w-full container h-[calc(100dvh-70px)] flex items-center justify-center">
      <div className="card-wrapper">
        {/* image wrapper */}
        <div className="w-1/2 h-full hidden md:block relative rounded-s-lg">
          <Image
            src={formImage}
            alt=""
            fill
            sizes="fill"
            className="object-cover rounded-s-lg"
          />
        </div>
        {/* login form with google login option */}
        <LoginForm />
      </div>
    </div>
  );
};

export default SigninPage;
