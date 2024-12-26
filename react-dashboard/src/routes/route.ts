// routesConfig.ts
import React from "react";
import Admin from "../pages/admin/Admin";
import SingleTeacherPage from "../pages/list/teachers/SingleTeacherPage";
import Student from "../pages/student/Student";
import Teacher from "../pages/teacher/Teacher";
import Parent from "../pages/parent/Parent";
import ListContainer from "../pages/list/share/ListContainer";

interface Route {
  path: string;
  element: React.ReactElement;
}

export const routes: Route[] = [
  { path: "/", element: React.createElement(Admin) },
  { path: "home", element: React.createElement(Admin) },
  { path: "student", element: React.createElement(Student) },
  { path: "student/list", element: React.createElement(ListContainer) },
  { path: "teacher", element: React.createElement(Teacher) },
  { path: "teacher/list", element: React.createElement(ListContainer) },
  { path: "teacher/list/:id", element: React.createElement(SingleTeacherPage) },
  { path: "parent", element: React.createElement(Parent) },
  { path: "parent/list", element: React.createElement(ListContainer) },
  { path: "class/list", element: React.createElement(ListContainer) },
  { path: "lesson/list", element: React.createElement(ListContainer) },
  { path: "assignment/list", element: React.createElement(ListContainer) },
  { path: "exam/list", element: React.createElement(ListContainer) },
  { path: "result/list", element: React.createElement(ListContainer) },
  { path: "subject/list", element: React.createElement(ListContainer) },
];
