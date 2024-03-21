import React from "react";

const ComponentTable = () => {
  return (
    <div className="bg-[#FFFFFF] ring-1 ring-[#292D32]/5 transition-all hover:ring-[#292D32]/10 overflow-x-auto w-full rounded-lg">
      <table className="w-full rounded-lg">
        <thead>
          <tr>
            <th className="pl-4 pt-4 pb-4 text-sm font-semibold text-start">
              No
            </th>
            <th className="px-4 pt-4 pb-4 text-sm font-semibold text-start">
              Mata Pelajaran
            </th>
            <th className="pr-4 pt-4 pb-4 text-sm font-semibold text-start">
              Nilai (Angka)
            </th>
            <th className="pr-4 pt-4 pb-4 text-sm font-semibold text-start">
              Nilai (Huruf)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-4 pt-4 pb-4 text-xs font-medium text-start">1</td>
            <td className="px-4 pt-4 pb-4 text-xs font-medium text-start truncate">
              Sains
            </td>
            <td className="pr-4 pt-4 pb-4 text-xs font-medium text-start">
              100
            </td>
            <td className="pr-4 pt-4 pb-4 text-xs font-medium text-start">A</td>
          </tr>
          <tr>
            <td className="pl-4 pt-4 pb-4 text-xs font-medium text-start">2</td>
            <td className="px-4 pt-4 pb-4 text-xs font-medium text-start truncate">
              Matematika
            </td>
            <td className="pr-4 pt-4 pb-4 text-xs font-medium text-start">
              85
            </td>
            <td className="pr-4 pt-4 pb-4 text-xs font-medium text-start">
              AB
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentTable;
