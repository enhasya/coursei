import React from "react";

const gradeCase = (grade) => {
  switch (grade) {
    case "A":
      return "text-[#2563EB]";
    case "AB":
      return "text-[#0284C7]";
    case "B":
      return "text-[#059669]";
    case "BC":
      return "text-[#65A30D]";
    case "C":
      return "text-[#CA8A04]";
    case "CD":
      return "text-[#EA580C]";
    case "D":
      return "text-[#DC2626]";
    default:
      return "";
  }
};

const ComponentTable = () => {
  const data = [
    {
      no: 1,
      mataPelajaran: "Sains",
      score: 100,
      grade: "A",
    },
    {
      no: 1,
      mataPelajaran: "Sains",
      score: 100,
      grade: "AB",
    },
    {
      no: 2,
      mataPelajaran: "Matematika",
      score: 80,
      grade: "B",
    },
    {
      no: 2,
      mataPelajaran: "Matematika",
      score: 80,
      grade: "BC",
    },
    {
      no: 2,
      mataPelajaran: "Matematika",
      score: 80,
      grade: "C",
    },
    {
      no: 2,
      mataPelajaran: "Matematika",
      score: 80,
      grade: "CD",
    },
    {
      no: 2,
      mataPelajaran: "Matematika",
      score: 80,
      grade: "D",
    },
  ];

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
          {data.map((data, index) => (
            <tr key={index}>
              <td className="pl-4 pt-4 pb-4 text-xs font-medium text-start">
                {data.no}
              </td>
              <td className="px-4 pt-4 pb-4 text-xs font-medium text-start truncate">
                {data.mataPelajaran}
              </td>
              <td
                className={`${gradeCase(
                  data.grade
                )} pr-4 pt-4 pb-4 text-xs font-medium text-start`}
              >
                {data.score}
              </td>
              <td
                className={`${gradeCase(
                  data.grade
                )} pr-4 pt-4 pb-4 text-xs font-medium text-start`}
              >
                {data.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentTable;
