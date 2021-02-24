import "reflect-metadata";
import "./database/index";
import app from "./app";

const port = 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
