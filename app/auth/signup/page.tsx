import RegisterForm from "@/app/components/RegisterForm";
import Image from "next/image";
import React from "react";

const SignupPage = () => {
  return (
    <div className="w-full container h-[calc(100dvh-70px)] flex items-center justify-center">
      <div className="card-wrapper">
        {/* Image */}
        <div className="hidden md:block md:w-1/2 h-full relative ">
          <Image
            src="/libary-1.jpg"
            alt=""
            fill
            sizes="fill"
            className="object-cover rounded-s-lg"
          />
        </div>
        {/* Form */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignupPage;
