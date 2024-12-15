"use client";
import { useState } from "react";
import Logo from "./Logo";
import PrimaryButton from "../PrimaryButton";
import { MdMenu } from "react-icons/md";
import NavbarMenu from "./NavbarMenu";
import useScrollHeight from "@/hooks/setScrollSize";
import MobileMenu from "./MobileMenu";
import Searchbar from "./Searchbar";

const Header = () => {
  const [scrollSize, setScrollSize] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useScrollHeight(setScrollSize);

  return (
    // container
    <div
      className={`
     ${
       scrollSize > 70
         ? "sticky top-0 right-0 left-0 bg-white w-full shadow-md z-[100] h-fit "
         : "static shadow-sm"
     }`}
    >
      <nav
        className={`flex items-center justify-between w-full container py-4 `}
      >
        {/* logo */}
        <Logo />
        {/* nav menu , login button */}
        <div className="hidden md:flex flex-1">
          <NavbarMenu />

          <div className="flex items-center gap-2 w-fit relative">
            <Searchbar />
            <PrimaryButton
              link
              path="/auth/signup"
              type="button"
              text="ورود | خروج"
            />
          </div>
        </div>

        {/* mobile screen menu */}
        <div className="flex md:hidden gap-x-5">
          <PrimaryButton type="button" text="ورود | خروج" />
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="bg-primaryColor text-white px-3 py-2 rounded-lg z-[20]"
          >
            <MdMenu size={20} />
          </button>
        </div>

        {openMenu && <MobileMenu />}
      </nav>
    </div>
  );
};

export default Header;
