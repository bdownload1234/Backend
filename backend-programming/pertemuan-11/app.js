// import express
const express = require("express");

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

const router = require("./routes/api");
app.use(router);

// definisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});