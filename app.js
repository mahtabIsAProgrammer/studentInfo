import express from "express";

const app = express();
const PORT = 3001;

const students = [
  {
    image: "https://example.com/student1.jpg",
    firstName: "John",
    lastName: "Doe",
    studentCode: "123456",
  },
  {
    image: "https://example.com/student2.jpg",
    firstName: "Jane",
    lastName: "Smith",
    studentCode: "789012",
  },
];

app.get("/", (_, res) => {
  res.render("index.ejs", { students });
});
app.get("/add", (_, res) => {
  res.render("add.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
