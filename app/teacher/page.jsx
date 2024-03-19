import React from "react";
import Image from "next/image";
import LayoutGrid from "@/components/layouts/grid";

const {
  default: NavigationTeacher,
} = require("@/components/navigations/teacher");

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
      <div className="flex w-full lg:w-[75%] h-full items-start justify-start p-4 lg:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-8 p-0 mt-0">
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
