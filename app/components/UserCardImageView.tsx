"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import tempUserProfile from "@/public/userProfile.jpg";

const UserCardImageView = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full  rounded-t-xl md:rounded-s-xl md:rounded-tl-none relative">
      <div className="user__card-image-box">
        <motion.div
          initial={{ height: 0, opacity: 0, x: 100 }}
          whileInView={{ height: 340, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[170px] md:h-full w-[170px] md:w-full border-2 border-primaryColor rounded-full md:border-none"
        >
          <Image
            src={tempUserProfile}
            alt="userProfile"
            fill
            sizes="fill"
            className="object-cover rounded-full md:rounded-xl p-1 md:p-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default UserCardImageView;
