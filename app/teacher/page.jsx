"use client";

import React from "react";

const {
  default: NavigationTeacher,
} = require("@/components/navigations/teacher");
const { default: LayoutGrid } = require("@/components/layouts/grid");
const { default: ProviderTime } = require("@/provider/time");

const icon = {
  filePencil: require("@/shared/icons/file-pencil-black.svg"),
  school: require("@/shared/icons/school-black.svg"),
  fileReport: require("@/shared/icons/file-report-black.svg"),
};

const TeacherPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen items-start justify-start gap-0 p-0 mt-0">
      <div className="flex w-full lg:w-[25%] h-full">
        <NavigationTeacher />
      </div>
      <div className="flex flex-col w-full lg:w-[75%] h-full items-start justify-start p-8">
        <div className="flex flex-col w-full h-auto items-start gap-2">
          <label className="text-[#292D32] font-semibold text-sm lg:text-lg mt-0">
            <ProviderTime />
          </label>
          <label className="text-[#292D32]/80 font-medium text-sm mt-0">
            Gunakan Quick Links dibawah untuk mengakses halaman dengan cepat
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 p-0 mt-8">
          <LayoutGrid
            titleIcon={icon.filePencil}
            title={"Input Nilai"}
            description={
              "Tautan langsung ke halaman input nilai siswa untuk memudahkan pengisian nilai"
            }
          />
          <LayoutGrid
            titleIcon={icon.school}
            title={"Lihat Data Siswa"}
            description={
              "Akses cepat ke profil individu siswa untuk melihat detail pribadi, catatan akademik, dan informasi kontak"
            }
          />
          <LayoutGrid
            titleIcon={icon.fileReport}
            title={"Riwayat Nilai"}
            description={
              "Tautan langsung ke riwayat nilai siswa untuk melihat sejarah nilai mereka dalam berbagai mata pelajaran"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
