"use client";

import React, { useState } from "react";
import Image from "next/image";

const icon = {
  user: require("@/shared/icons/user-black.svg"),
  signIn: require("@/shared/icons/sign-in-white.svg"),
  chevronUp: require("@/shared/icons/chevron-up-black.svg"),
  edit: require("@/shared/icons/edit-black.svg"),
};

const NavigationStudent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditField, setIsEditField] = useState({
    namaLengkap: false,
    nomorIndukSiswa: false,
    bio: false,
  });

  const isExpandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const isEditFieldHandler = (fieldName) => {
    setIsEditField((prevField) => ({
      ...prevField,
      [fieldName]: !prevField[fieldName],
    }));
  };

  return (
    <nav className="bg-[#FFFFFF] flex flex-row lg:flex-col gap-2 items-center lg:items-start justify-between w-full h-auto lg:h-full p-4 lg:p-8">
      <button className="bg-[#F4F4F4] transition-all hover:bg-[#F4F4F4]/80 flex lg:hidden flex-row gap-4 items-center justify-start w-auto lg:w-full h-auto rounded-lg p-4 mt-0 lg:mt-4">
        <Image src={icon.user} width="16" height="16" />
        <p className="hidden lg:flex text-[#292D32] font-medium text-sm mt-0">
          Masuk sebagai C.73.2918.2
        </p>
      </button>
      <div className="flex flex-col w-auto lg:w-full h-auto items-center lg:items-start gap-2">
        <h1 className="text-[#292D32] font-semibold text-sm lg:text-lg mt-0">
          COURSEI
        </h1>
        <h2 className="hidden lg:flex text-[#292D32]/80 font-medium text-sm mt-0">
          Sistem Akademik Kristen Lemuel
        </h2>
      </div>
      <div className="flex flex-row lg:flex-col w-auto lg:w-full h-auto gap-4 lg:gap-0">
        <div
          className={`${
            isExpanded ? "h-[212px]" : "h-[52px]"
          } transition-all duration-500 hidden lg:flex flex-col gap-4 items-start justify-between w-auto lg:w-full h-auto rounded-lg p-4 mt-0 lg:mt-4`}
        >
          <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto h-auto">
              <Image src={icon.user} width="16" height="16" />
              <p className="hidden lg:flex text-[#292D32] font-medium text-sm text-start truncate mt-0">
                Pengaturan Akun
              </p>
            </div>
            <button onClick={isExpandedHandler}>
              <Image
                className={`transition-all ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
                src={icon.chevronUp}
                width="16"
                height="16"
              />
            </button>
          </div>
          {isExpanded && (
            <React.Fragment>
              <div className="group flex flex-col w-full h-auto gap-0 items-start justify-center mt-4">
                <div className="flex flex-row gap-2 items-center justify-between w-full h-auto mt-0">
                  <p className="hidden lg:flex text-[#292D32] font-semibold text-xs text-start mt-0">
                    Nama Lengkap
                  </p>
                  <button
                    onClick={() => {
                      isEditFieldHandler("namaLengkap");
                    }}
                  >
                    <Image
                      className="group opacity-0 transition-all group-hover:opacity-100"
                      src={icon.edit}
                      width="14"
                      height="14"
                    />
                  </button>
                </div>
                {isEditField.namaLengkap ? (
                  <React.Fragment>
                    <input
                      className="bg-transparent outline-none w-full text-[#292D32]/80 font-medium text-xs"
                      type="text"
                      placeholder="Masukkan Nama Lengkap .."
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p className="hidden lg:flex text-[#292D32]/80 font-medium text-xs text-start mt-0">
                      John Doe
                    </p>
                  </React.Fragment>
                )}
              </div>
              <div className="group flex flex-col w-full h-auto gap-0 items-start justify-center">
                <div className="flex flex-row gap-2 items-center justify-between w-full h-auto mt-0">
                  <p className="hidden lg:flex text-[#292D32] font-semibold text-xs text-start mt-0">
                    Nomor Induk Siswa
                  </p>
                  <button
                    onClick={() => {
                      isEditFieldHandler("nomorIndukSiswa");
                    }}
                  >
                    <Image
                      className="group opacity-0 transition-all group-hover:opacity-100"
                      src={icon.edit}
                      width="14"
                      height="14"
                    />
                  </button>
                </div>
                {isEditField.nomorIndukSiswa ? (
                  <React.Fragment>
                    <input
                      className="bg-transparent outline-none w-full text-[#292D32]/80 font-medium text-xs"
                      type="text"
                      placeholder="Masukkan Nomor Induk Siswa .."
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p className="hidden lg:flex text-[#292D32]/80 font-medium text-xs text-start mt-0">
                      C.73.2918.2
                    </p>
                  </React.Fragment>
                )}
              </div>
              <div className="group flex flex-col w-full h-auto gap-0 items-start justify-center">
                <div className="flex flex-row gap-2 items-center justify-between w-full h-auto mt-0">
                  <p className="hidden lg:flex text-[#292D32] font-semibold text-xs text-start mt-0">
                    Bio
                  </p>
                  <button
                    onClick={() => {
                      isEditFieldHandler("bio");
                    }}
                  >
                    <Image
                      className="group opacity-0 transition-all group-hover:opacity-100"
                      src={icon.edit}
                      width="14"
                      height="14"
                    />
                  </button>
                </div>
                {isEditField.bio ? (
                  <React.Fragment>
                    <input
                      className="bg-transparent outline-none w-full text-[#292D32]/80 font-medium text-xs"
                      type="text"
                      placeholder="Masukkan Bio .."
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p className="hidden lg:flex text-[#292D32]/80 font-medium text-xs text-start mt-0">
                      Available
                    </p>
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
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
