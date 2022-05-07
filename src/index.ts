import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "5mb" }));

app.get("/", (req: Request, res: Response) =>
  res.send("<h1>Hello from send_mail api 👋</h1>")
);
app.use("/api/v1", routes);

app.use(errorHandler);
app.listen(PORT, () => console.log("server running on port --> ", PORT));
