import fs from "fs";

export const getStudents = () => {
  return JSON.parse(fs.readFileSync("students.json", "utf-8"));
};

export const saveStudents = (students) => {
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
};
