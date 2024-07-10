import express from "npm:express@4.19.2";
import dotenv from "npm:dotenv@16.4.5";
import process from "npm:process@0.11.10";

dotenv.config();

const app = express();

app.use("/", express.static(process.env.STATIC_PATH))

// app.get("/", (req: any, res: any) => {
//   res.send("welcome!!");
// });

app.listen(process.env.PORT);