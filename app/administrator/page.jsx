"use client";

import React from "react";
import LayoutGrid from "@/components/layouts/grid";

const {
  default: NavigationAdministrator,
} = require("@/components/navigations/administrator");

const icon = {
  filePencil: require("@/shared/icons/file-pencil-black.svg"),
  school: require("@/shared/icons/school-black.svg"),
  book: require("@/shared/icons/book-black.svg"),
  printer: require("@/shared/icons/printer-black.svg"),
  fileReport: require("@/shared/icons/file-report-black.svg"),
};

const AdministratorPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen items-start justify-start gap-0 p-0 mt-0">
      <div className="flex w-full lg:w-[25%] h-full">
        <NavigationAdministrator />
      </div>
      <div className="flex w-full lg:w-[75%] h-full items-start justify-start p-4 lg:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-8 p-0 mt-0">
          <LayoutGrid
            titleIcon={icon.filePencil}
            title={"Manajemen Data"}
            description={
              "Akses langsung ke data untuk mengelola semua aspek data sekolah termasuk lihat, tambah, ubah, hapus data"
            }
          />
          <LayoutGrid
            titleIcon={icon.school}
            title={"Tambah Tahun Ajaran"}
            description={
              "Tautan cepat untuk menambahkan tahun ajaran baru ke dalam sistem"
            }
          />
          <LayoutGrid
            titleIcon={icon.book}
            title={"Input Rombongan Belajar"}
            description={
              "Langsung ke halaman untuk memasukkan informasi tentang rombongan belajar seperti kelas, guru, dan siswa yang terdaftar"
            }
          />
          <LayoutGrid
            titleIcon={icon.printer}
            title={"Cetak Laporan"}
            description={
              "Akses mudah untuk mencetak laporan yang diperlukan, seperti laporan keuangan, laporan nilai, atau laporan kehadiran"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdministratorPage;
