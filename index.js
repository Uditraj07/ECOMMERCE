const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const { mongoConnect } = require('./util/database');

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Importing routes
const AdminRoutes = require('./routes/admin');

// Using routes
app.get('/', (req, res, next) => {
    res.send("This is index page")
});

app.use('/admin', AdminRoutes);

const PORT = process.env.PORT || 8080;

mongoConnect(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
});