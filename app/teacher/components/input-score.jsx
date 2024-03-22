import React from "react";
import Image from "next/image";

const icon = {
  clipboardPlus: require("@/shared/icons/clipboard-plus-black.svg"),
  clipboardCheck: require("@/shared/icons/clipboard-check-black.svg"),
  x: require("@/shared/icons/x-black.svg"),
  user: require("@/shared/icons/user-black.svg"),
  password: require("@/shared/icons/password-black.svg"),
};

const ComponentInputScore = ({ onClick }) => {
  return (
    <div className="bg-white ring-1 ring-transparent transition-all hover:ring-[#292D32]/5 flex flex-col w-full h-auto items-normal justify-start p-8 rounded-lg mt-8">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-start w-auto h-auto">
          <Image src={icon.clipboardPlus} width="16" height="16" />
          <p className="text-[#292D32] font-semibold text-sm truncate mt-0">
            Input Nilai
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center w-auto p-0 mt-0">
          <button
            onClick={onClick}
            className="bg-[#292D32]/5 hover:bg-[#292D32]/10 flex flex-row gap-2 items-center justify-center w-auto h-auto ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 rounded-full p-2 lg:px-4 lg:py-2 mt-0"
          >
            <p className="hidden lg:flex text-[#292D32]/80 font-medium text-xs mt-0">
              Masukkan Nilai
            </p>
            <Image src={icon.clipboardCheck} width="16" height="16" />
          </button>
          <button
            onClick={onClick}
            className="bg-[#292D32]/5 hover:bg-[#292D32]/10 flex flex-row gap-2 items-center justify-center w-auto h-auto ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 rounded-full p-2 lg:px-4 lg:py-2 mt-0"
          >
            <p className="hidden lg:flex text-[#292D32]/80 font-medium text-xs mt-0">
              Tutup
            </p>
            <Image src={icon.x} width="16" height="16" />
          </button>
        </div>
      </div>
      <p className="text-[#292D32]/80 font-medium text-xs mt-8">
        <form className="flex flex-col gap-0 mt-0 w-full items-end justify-center">
          <p className="text-[#292D32] font-medium text-xs text-start w-full mt-0">
            Guru
          </p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.user} width="14" height="14" />
            <select
              className="bg-transparent outline-none w-full text-[#292D32]
              font-medium text-xs"
              type="select"
              placeholder="C.73.2918.2"
            >
              <option>Guru</option>
            </select>
          </div>
          <p className="text-[#292D32] font-medium text-xs text-start w-full mt-8">
            Mata Pelajaran
          </p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.user} width="14" height="14" />
            <select
              className="bg-transparent outline-none w-full text-[#292D32]
              font-medium text-xs"
              type="select"
              placeholder="C.73.2918.2"
            >
              <option>Mata Pelajaran</option>
            </select>
          </div>
          <p className="text-[#292D32] font-medium text-xs text-start w-full mt-8">
            Siswa
          </p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.user} width="14" height="14" />
            <select
              className="bg-transparent outline-none w-full text-[#292D32]
              font-medium text-xs"
              type="select"
              placeholder="C.73.2918.2"
            >
              <option>Siswa</option>
            </select>
          </div>
          <p className="text-[#292D32] font-medium text-xs text-start w-full mt-8">
            Nilai (Angka)
          </p>
          <div className="bg-[#292D32]/5 ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 flex flex-row gap-4 items-center justify-start w-full h-auto rounded-lg p-4 mt-2">
            <Image src={icon.password} width="14" height="14" />
            <input
              className="bg-transparent outline-none w-full text-[#292D32] font-medium text-xs"
              type="number"
              min="0"
              max="100"
              placeholder="0 - 100"
            />
          </div>
        </form>
      </p>
    </div>
  );
};

export default ComponentInputScore;
