import Image from "next/image";
import libaryImage from "@/public/library-3.jpg";
import RegisterForm from "@/app/components/RegisterForm";


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
        <RegisterForm />
      </div>
    </div>
  );
};

export default NewMemberPage;
