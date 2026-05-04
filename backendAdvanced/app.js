const express = require("express");


const app = express();
const PORT = 4000;

app.use(app.json());


app.get("/", (req, res) => {
    res.json({ message: "Hello world!" })
})

// app.post("/create-product")


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})