import express from 'express';
import 'dotenv/config';
import { userRouter } from '@routes/userRoutes';
import { isAuthenticated } from '@middlewares/authentication';
import { authRouter } from '@routes/authRoutes';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
    res.send("Hello World")
})

app.use("/auth", authRouter)
app.use(isAuthenticated)
app.use("/users", userRouter)

export default app;
