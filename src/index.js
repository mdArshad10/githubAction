import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { styleText } from "node:util";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Testing the Github Action",
    success: true,
  });
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(
    styleText(["bgGreen"], `The server is running at port => ${port}`)
  );
});
