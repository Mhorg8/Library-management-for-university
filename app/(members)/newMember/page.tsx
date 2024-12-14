import Input from "@/app/components/Input";
import Image from "next/image";
import libaryImage from "@/public/library-3.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";

const NewMemberPage = () => {
  return (
    <div className="container h-[calc(100dvh-70px)] flex items-center justify-center">
      <div className="flex items-center w-[300px] md:w-[600px] h-[500px]">
        <div className="hidden md:block w-1/2 h-full relative">
          <Image
            src={libaryImage}
            alt="libary-img"
            fill
            sizes="fill"
            className="object-cover rounded-s-lg"
          />
        </div>
        <form action="" className="form">
          <Input
            label="نام"
            type="text"
            placeholder="محمدحسین"
            name="firstName"
          />
          <Input
            label="نام خانوادگی"
            type="text"
            placeholder="علیرضایی"
            name="lastName"
          />
          <Input
            label="تلفن همراه"
            type="text"
            placeholder="09334055539"
            name="phoneNumber"
          />
          <Input
            label="رمز عبور"
            type="text"
            placeholder="**********"
            name="password"
          />

          <PrimaryButton
            text="افزودن"
            type="submit"
            customStyle="py-3 mt-5 active:bg-success hover:bg-success transition duration-200 "
          />

          <div className="flex items-center justify-center w-full">
            <h2 className="text-xl text-darkGray font-bold select-none">
              کتابیار
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMemberPage;
