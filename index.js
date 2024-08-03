const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res,next) => {
    res.send("This is index page")
})


PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("PORT is running at "+PORT)
});