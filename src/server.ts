import app from "./app";

app.listen(process.env.PORT, () => {
    console.log(`Server is started at: ${process.env.PORT}`)
})
