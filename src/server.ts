import express from "express";
import router from "./routes";

const app = express();

router(app)


app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
})
