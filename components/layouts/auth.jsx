"use client";

import React from "react";
import Image from "next/image";

const image = {
  cover: require("@/shared/assets/brandon-vazquez-koC5eG6v6ew-unsplash.jpg"),
};

const icon = {
  user: require("@/shared/icons/user-black.svg"),
  password: require("@/shared/icons/password-black.svg"),
  signIn: require("@/shared/icons/sign-in-white.svg"),
};

const LayoutAuth = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-0 items-center justify-center w-full h-screen p-8">
      <div className="bg-white hidden lg:flex flex-col w-full lg:w-[440px] h-auto lg:h-[560px] rounded-none lg:rounded-l-lg p-0">
        <Image
          src={image.cover}
          className="w-full h-full rounded-none lg:rounded-l-lg"
        />
      </div>
      <div className="bg-white flex flex-col w-full lg:w-[440px] h-auto lg:h-[560px] items-center justify-between rounded-lg lg:rounded-l-none lg:rounded-r-lg p-8">
        <div className="flex flex-col w-full h-auto gap-2">
          <h1 className="text-[#292D32] font-semibold text-lg mt-0">
            Sistem Akademik Kristen Lemuel
          </h1>
          <h2 className="text-[#292D32]/80 font-medium text-sm mt-0">
            Otentikasi diperlukan untuk mengakses dashboard
          </h2>
        </div>
        <form className="flex flex-col gap-0 mt-8 lg:mt-0 w-full">
          <p className="text-[#292D32] font-medium text-xs mt-4">Username</p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.user} width="14" height="14" />
            <input
              className="bg-transparent outline-none w-full text-[#292D32] font-medium text-xs"
              type="text"
              placeholder="C.73.2918.2"
            />
          </div>
          <p className="text-[#292D32] font-medium text-xs mt-4">Password</p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.password} width="14" height="14" />
            <input
              className="bg-transparent outline-none w-full text-[#292D32] font-medium text-xs"
              type="password"
              placeholder="password123"
            />
          </div>
          <p className="text-[#292D32] font-medium text-xs text-end hover:underline mt-4">
            Lupa password?
          </p>
          <button className="bg-[#292D32] transition-all hover:bg-[#292D32]/80 flex flex-row gap-4 items-center justify-center w-full h-auto rounded-lg p-4 mt-4">
            <p className="text-[#F4F4F4] font-medium text-sm mt-0">Masuk</p>
            <Image src={icon.signIn} width="16" height="16" />
          </button>
        </form>
      </div>
    </main>
  );
};

export default LayoutAuth;
