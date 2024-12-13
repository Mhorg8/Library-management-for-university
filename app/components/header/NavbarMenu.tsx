import { MenuLinks } from "@/app/constants";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <ul className="flex items-center gap-x-7 flex-1 justify-center ">
      {MenuLinks.map((item) => {
        return (
          <li
            key={item.id}
            className="hover:scale-105 hover:underline transition duration-200"
          >
            <Link className="font-medium text-black" href={item.path}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
