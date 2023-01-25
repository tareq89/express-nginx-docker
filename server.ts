// const express = require("express");
import express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.APP_PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_req, _res) => _res.send("Hello World!!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
