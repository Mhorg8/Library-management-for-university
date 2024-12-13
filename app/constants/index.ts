import { feature, NavLink } from "../types/types";

export const MenuLinks: NavLink[] = [
  { id: 1, title: "لیست کتاب ها", path: "/members" },
  { id: 2, title: "لیست اعضا", path: "/members" },
  { id: 3, title: "افزودن کتاب", path: "/members" },
  { id: 4, title: "افزودن عضو جدید", path: "/members" },
];

export const features: feature[] = [
  { title: "دسترسی راحت", text: "دسترسی راحت تر به تمامی کتاب ها" },
  { title: "امنیت بالا", text: "افزایش امنیت با جدیدترین روش ها" },
  { title: "مدریت اعضا", text: "مدریت راحت به تمامی اعضا" },
  { title: "افزودن کتاب", text: "اضافه کردن راحت کتاب ها به لیست کتاب ها" },
  { title: "افزودن عضو", text: "اضافه کردن اعضا و قابلیت تغییر وضعیت کاربر" },
  { title: "جستجوی سریع", text: "پیدا کردن کتاب بدون وقفه" },
];
