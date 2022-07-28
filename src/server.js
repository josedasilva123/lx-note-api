require("dotenv").config();
const express = require("express");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();


app.use(cors());    
//Métodos para o req.body funcionar
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

/*
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    next();   
});
*/

app.use('/user', userRoutes);
app.use('/notes', noteRoutes);

module.exports = app;