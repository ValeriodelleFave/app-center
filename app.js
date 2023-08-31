const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers.origin === "https://www.valeriodellefave.dev") {
        res.setHeader("Access-Control-Allow-Origin", "https://www.valeriodellefave.dev");
    } else {
        res.setHeader("Access-Control-Allow-Origin", "https://valeriodellefave.github.io");
    }
    next();
});

// We want to use JSON to send post request to our application
app.use(bodyParser.json());

// We tell express to serve the folder public as static content
app.use(express.static('public'));

app.get('/public');

app.listen(port, () => console.log(`Listening on port ${port}!`));