import express from "express";
import { getStudents, saveStudents } from "../utils/helper.js";

const router = express.Router();

export default (image) => {
  router.get("/", (req, res) => {
    const students = getStudents();
    res.render("index", { students });
  });
  router.get("/add", (req, res) => {
    res.render("add");
  });

  router.post("/create", image.single("image"), (req, res) => {
    const students = getStudents();
    students.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      studentCode: req.body.studentCode,
      image: req.file ? "/images/" + req.file.filename : null,
    });
    saveStudents(students);
    res.redirect("/");
  });

  return router;
};
