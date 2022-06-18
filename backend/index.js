const express = require("express");

const mysql = require("mysql");
const bcrypt = require("bcryptjs");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mocha",
});

const transmission = () => {
    db.connect((error) => {
        if (error) return false;
        return true;
    });
};

app.post("/login", (req, res) => {
    let params = req.body;

    console.log(params);
});

app.listen(8888, () => {
    // if (transmission()) {
    //     console.log("mocha.db connected");
    // }
    console.log("mocha.db connected");
});
