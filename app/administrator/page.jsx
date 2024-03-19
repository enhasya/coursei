"use client";

import React from "react";

const {
  default: NavigationAdministrator,
} = require("@/components/navigations/administrator");
const { default: LayoutGrid } = require("@/components/layouts/grid");
const { default: ProviderTime } = require("@/provider/time-provider");

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
