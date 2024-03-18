import React from "react";

const {
  default: NavigationTeacher,
} = require("@/components/navigations/teacher");
const { default: ComponentTable } = require("@/app/student/components/table");

const TeacherPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen items-start justify-start gap-0 p-0 mt-0">
      <div className="flex w-full lg:w-[25%] h-full">
        <NavigationTeacher />
      </div>
      <div className="flex w-full lg:w-[75%] h-full items-start justify-start p-8">
        <div className="flex w-full p-0 mt-0">
          <ComponentTable />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
