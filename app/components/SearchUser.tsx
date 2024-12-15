"use client";
import PrimaryButton from "@/app/components/PrimaryButton";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
const SearchUser = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"error" | "success" | "default">(
    "default"
  );
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = studentIdRef.current?.value;
    try {
      if (!query) return;

      if (query.length < 6) {
        setStatus("error");
      } else {
        setStatus("success");
        router.push(`/members/${query}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-200 h-fit w-full rounded-xl p-3">
      <h2 className="text-2xl font-bold">جتسجوی اعضا</h2>
      <form onSubmit={handleSearch} className="flex flex-col mt-5 ">
        <label className="font-semibold">کد دانشجویی</label>
        <input
          ref={studentIdRef}
          type="text"
          className={`${
            status === "success" ? "border border-success" : "border-none"
          } ${
            status === "error" ? "border-2 border-red-500" : ""
          } mt-1 py-2 px-4 rounded-lg shadow-sm focus:shadow-md outline-none placeholder:text-darkGray`}
          placeholder="40057741051019"
        />
        {status === "error" && (
          <p className="text-sm text-red-500">کد دانشجوی معتبر نیست.</p>
        )}
        <PrimaryButton
          text="جستجو"
          type="submit"
          customStyle="py-2 mt-5 active:bg-success hover:bg-lightBlue transition-all duration-200"
        />
      </form>
    </div>
  );
};

export default SearchUser;
