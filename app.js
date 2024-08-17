// Import dependencies and set up http server
require('dotenv').config();
const express = require("express");
const { urlencoded, json } = require("body-parser");

const { verifyRequestSignature } = require('./src/services/utils');
const fbRoutes = require('./src/api/routes/fb');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(
    urlencoded({
        extended: true
    })
);

// Parse application/json. Verify that callback came from Facebook
app.use(json({ verify: verifyRequestSignature }));

app.use('/fb', fbRoutes);

// Respond with hello message when a GET request is made to the homepage
app.get("/", function (_req, res) {
    res.status(200).json({
        msg: 'hello'
    });
});


const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`The app is listening on port ${PORT}`);
});
