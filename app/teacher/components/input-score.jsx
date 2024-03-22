import React from "react";
import Image from "next/image";

const icon = {
  clipboardPlus: require("@/shared/icons/clipboard-plus-black.svg"),
  x: require("@/shared/icons/x-black.svg"),
};

const ComponentInputScore = ({ onClick }) => {
  return (
    <div className="bg-white ring-1 ring-transparent transition-all hover:ring-[#292D32]/5 flex flex-col w-full h-auto lg:h-[240px] items-normal justify-start p-8 rounded-lg mt-8">
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
            className="bg-[#292D32]/5 hover:bg-[#292D32]/10 flex flex-row gap-2 items-center justify-center w-auto h-auto ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 rounded-full px-4 py-2 mt-0"
          >
            <p className="text-[#292D32]/80 font-medium text-xs mt-0">
              Masukkan Nilai
            </p>
            <Image src={icon.x} width="16" height="16" />
          </button>
          <button
            onClick={onClick}
            className="bg-[#292D32]/5 hover:bg-[#292D32]/10 flex flex-row gap-2 items-center justify-center w-auto h-auto ring-1 ring-[#292D32]/10 transition-all hover:ring-[#292D32]/15 rounded-full px-4 py-2 mt-0"
          >
            <p className="text-[#292D32]/80 font-medium text-xs mt-0">Tutup</p>
            <Image src={icon.x} width="16" height="16" />
          </button>
        </div>
      </div>
      <p className="text-[#292D32]/80 font-medium text-xs mt-4 lg:mt-0">
        Tunggu
      </p>
    </div>
  );
};

export default ComponentInputScore;
