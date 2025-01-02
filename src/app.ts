import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import { router } from '@routes/UserRoutes';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: "*",
}));

app.get('/', (_, res) => {
    res.send("Hello World")
})

app.use("/users", router)

export default app;
