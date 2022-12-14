require("dotenv").config();
require('./db/conn');
const express = require("express");

const app = express();
const port = process.env.PORT;

const userRoutes = require("./routes/userRoute");
app.use('/', userRoutes);

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
console.log(`Server is running at ${port}`);
});

app.use('/', userRoutes);