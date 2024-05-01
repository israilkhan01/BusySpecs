import { Application } from "express";

// Import the express in typescript file
const express = require("express");
const db=require('./config/db');

// Initialize the express engine
const app:Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get('/', (_req, _res) => {
	_res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
