"use client";

import { useEffect } from "react";

const useScrollHeight = (setState: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      setState(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setState]);
};

export default useScrollHeight;
