import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const icon = {
  filePencil: require("@/shared/icons/file-pencil-black.svg"),
  school: require("@/shared/icons/school-black.svg"),
  fileReport: require("@/shared/icons/file-report-black.svg"),
  arrowRight: require("@/shared/icons/arrow-right-black.svg"),
};

const ComponentInputScore = () => {
  const router = useRouter();

  return (
    <div className="bg-white ring-1 ring-transparent transition-all hover:ring-[#292D32]/5 flex flex-col w-full h-auto lg:h-[240px] items-normal justify-start p-8 rounded-lg mt-8">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-start">
          <Image src={icon.filePencil} width="16" height="16" />
          <button
            onClick={() => router.push("/")}
            className="text-[#292D32] font-semibold text-sm truncate hover:underline mt-0"
          >
            Input Score
          </button>
        </div>
        <button>
          <Image src={icon.arrowRight} width="16" height="16" />
        </button>
      </div>
      <p className="text-[#292D32]/80 font-medium text-xs mt-4 lg:mt-0">Apaya</p>
    </div>
  );
};

export default ComponentInputScore;
