import express from "express";
import type { Express } from "express";
import 'dotenv/config'
import { router } from "./routes/routes";
import { startDB } from "./database/mongo-cnnct";

const PORT: string = process.env.PORT || '3000';

const app: Express = express();

app.use(express.json());
app.use(router);

startDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})