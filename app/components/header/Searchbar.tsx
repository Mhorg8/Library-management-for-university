"use client";
import { FormEvent, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { updateUrl } from "@/hooks/updateUrl";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);
  const searchQueryRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchQuery = searchQueryRef.current?.value;

    if (searchQuery) {
      const url = updateUrl("s", searchQuery);
      router.push(url);

      searchQueryRef.current = null;
      setOpenSearchbar(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      initial={{ width: 30, height: 30 }}
      animate={{
        width: openSearchbar ? 250 : 30,
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: "130  " }}
      className={`bg-softGray h-[30px] flex items-center justify-center rounded-full `}
    >
      <button type="submit" onClick={() => setOpenSearchbar(true)} className="">
        <CiSearch size={20} />
      </button>
      {openSearchbar && (
        <input
          ref={searchQueryRef}
          type="text"
          placeholder="جستجو"
          className="w-full bg-transparent outline-none px-2 text-sm"
        />
      )}
    </motion.form>
  );
};

export default Searchbar;
