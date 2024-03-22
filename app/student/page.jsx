"use client";

import React from "react";

const {
  default: NavigationStudent,
} = require("@/components/navigations/student");
const { default: ProviderTime } = require("@/provider/time-provider");
const { default: ComponentTable } = require("@/app/student/components/table");

const StudentPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen items-start justify-start gap-0 p-0 mt-0">
      <div className="flex w-full lg:w-[25%] h-full">
        <NavigationStudent />
      </div>
      <div className="flex flex-col w-full lg:w-[75%] h-full items-start justify-start p-8 overflow-y-auto">
        <div className="flex flex-col w-full h-auto items-start gap-2">
          <label className="text-[#292D32] font-semibold text-sm lg:text-lg mt-0">
            <ProviderTime />
          </label>
        </div>
        <div className="flex w-full p-0 mt-8">
          <ComponentTable />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
