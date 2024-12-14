import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import bannerImage from "@/public/libary-2.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[80dvh] md:h-[70dvh]  flex flex-col md:flex-row items-center bg-lightBlue bg-opacity-40">
      <div className="relative w-full md:w-2/3 h-full order-2 md:order-1">
        <Image
          src={bannerImage}
          alt="banner"
          fill
          sizes="fill"
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center h-full p-10 order-1 md:order-2">
        <h1 className="text-4xl font-bold text-center">
          هر کتابی که نیاز داشته باشی <br />
          اینجا هست.
        </h1>
        <p className="mb-10 mt-2">
          سامانه هوشمند مدریت کتابخانه طراحی شده برای دانشگاه آزاد شهریار
        </p>
        <div className="">
          <PrimaryButton text="جزیات بیشتر" type="button" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
