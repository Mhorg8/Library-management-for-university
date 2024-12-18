import { feature, NavLink } from "../types/types";

export const MenuLinks: NavLink[] = [
  { id: 1, title: "لیست کتاب ها", path: "/books" },
  { id: 2, title: "لیست اعضا", path: "/members" },
  { id: 3, title: "افزودن کتاب", path: "/newBooks" },
  { id: 4, title: "افزودن عضو جدید", path: "/newMember" },
];

export const features: feature[] = [
  { id: 1, title: "دسترسی راحت", text: "دسترسی راحت تر به تمامی کتاب ها" },
  { id: 2, title: "امنیت بالا", text: "افزایش امنیت با جدیدترین روش ها" },
  { id: 3, title: "مدریت اعضا", text: "مدریت راحت به تمامی اعضا" },
  {
    id: 4,
    title: "افزودن کتاب",
    text: "اضافه کردن راحت کتاب ها به لیست کتاب ها",
  },
  {
    id: 5,
    title: "افزودن عضو",
    text: "اضافه کردن اعضا و قابلیت تغییر وضعیت کاربر",
  },
  { id: 6, title: "جستجوی سریع", text: "پیدا کردن کتاب بدون وقفه" },
];
