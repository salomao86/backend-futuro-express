require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();
const connectToDatabase = require("./database/database");

const auth = require("./routers/auth.router");
const user = require("./routers/user.router");

app.use(express.json());
app.use(cors());
connectToDatabase();

app.use("/user", user);
app.use("/auth", auth);

app.get("/", (req, res) => {
    res.send("hello hello");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
