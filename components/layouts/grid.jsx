"use client";

import React from "react";
import Image from "next/image";

const icon = {
  arrowRight: require("@/shared/icons/arrow-right-black.svg"),
};

const LayoutGrid = ({ titleIcon, title, description }) => {
  return (
    <div className="bg-white ring-1 ring-transparent transition-all hover:ring-[#292D32]/5 flex flex-col w-full h-auto lg:h-[240px] items-normal justify-start lg:justify-between p-8 rounded-lg">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-start">
          <Image src={titleIcon} width="16" height="16" />
          <p className="text-[#292D32] font-semibold text-sm truncate mt-0">{title}</p>
        </div>
        <button>
          <Image
            className="hidden lg:flex"
            src={icon.arrowRight}
            width="16"
            height="16"
          />
        </button>
      </div>
      <p className="text-[#292D32]/80 font-medium text-xs mt-4 lg:mt-0">
        {description}
      </p>
    </div>
  );
};

export default LayoutGrid;
