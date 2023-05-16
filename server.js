import express from "express";
import cors from "cors"

const app  = express(); 
const port = 3000; 
// Agrego los Middlewares 
app.use(cors());
app.use(express.json());
app.use(express.static('public'));