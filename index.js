const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('admin/dashboard');
});


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});