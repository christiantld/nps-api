import express from "express";

const app = express();

const port = 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello World in Json" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Dados salvos com sucesso" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
