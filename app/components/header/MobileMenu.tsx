import { MenuLinks } from "@/app/constants";
import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="absolute top-0 left-0 w-[70%] bg-softGray h-screen flex flex-col items-center justify-center z-[10]">
      <ul className="flex flex-col text-center gap-3">
        {MenuLinks.map((link) => (
          <li key={link.id}>
            <Link
              className="text-xl font-semibold hover:text-primaryColor hover:underline transition-all duration-200"
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
