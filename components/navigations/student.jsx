"use client";

import React from "react";
import Image from "next/image";

const icon = {
  user: require("@/shared/icons/user-black.svg"),
  signIn: require("@/shared/icons/sign-in-white.svg"),
};

const NavigationStudent = () => {
  return (
    <nav className="bg-[#FFFFFF] flex flex-row lg:flex-col gap-2 items-center lg:items-start justify-between w-full h-auto lg:h-full p-4 lg:p-8">
      <button className="bg-[#F4F4F4] transition-all hover:bg-[#F4F4F4]/80 flex lg:hidden flex-row gap-4 items-center justify-start w-auto lg:w-full h-auto rounded-lg p-4 mt-0 lg:mt-4">
        <Image src={icon.user} width="16" height="16" />
        <p className="hidden lg:flex text-[#292D32] font-medium text-sm mt-0">
          Masuk sebagai C.73.2918.2
        </p>
      </button>
      <h1 className="text-[#292D32] font-semibold text-sm mt-0">
        Sistem Akademik Kristen Lemuel
      </h1>
      <div className="flex flex-row lg:flex-col w-auto lg:w-full h-auto gap-4 lg:gap-0">
        <button className="bg-[#F4F4F4] transition-all hover:bg-[#F4F4F4]/80 hidden lg:flex flex-row gap-4 items-center justify-start w-auto lg:w-full h-auto rounded-lg p-4 mt-0 lg:mt-4">
          <Image src={icon.user} width="16" height="16" />
          <p className="hidden lg:flex text-[#292D32] font-medium text-sm mt-0">
            Masuk sebagai C.73.2918.2
          </p>
        </button>
        <button className="bg-[#292D32] transition-all hover:bg-[#292D32]/80 flex flex-row gap-4 items-center justify-center w-auto lg:w-full h-auto rounded-lg p-4 mt-0 lg:mt-4">
          <p className="hidden lg:flex text-[#F4F4F4] font-medium text-sm mt-0">
            Keluar
          </p>
          <Image src={icon.signIn} width="16" height="16" />
        </button>
      </div>
    </nav>
  );
};

export default NavigationStudent;
