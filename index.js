import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import studentsRoutes from "./routes/studentsRoutes.js";

//express setup
const app = express();
const PORT = 3001;

//middlewares setup
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.set("view engine", "ejs");

// file and folder setup
if (!fs.existsSync("students.json")) fs.writeFileSync("students.json", "[]");
if (!fs.existsSync("images")) fs.mkdirSync("images");

//multer  setup
const storage = multer.diskStorage({
  destination: "images/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const imageUpload = multer({ storage });

// route handling
app.use("/", studentsRoutes(imageUpload));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
