const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

const { read } = require('./controllers/books_ctrl');
const { create } = require('./controllers/books_ctrl');

app.use(bodyParser.json());
app.use(cors());
app.get("/api/books", read);
app.post("/api/books", create);


app.listen( port, () => {
    console.log(`Server listening on port: ${port}`); 
} )

