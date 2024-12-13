import RegisterForm from "@/app/components/RegisterForm";
import Image from "next/image";
import React from "react";

const SignupPage = () => {
  return (
    <div className="w-full container h-[calc(100dvh-70px)] flex items-center justify-center">
      <div className="flex items-center w-[300px] h-[400px] md:w-[600px] md:h-[450px] shadow-lg">
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
