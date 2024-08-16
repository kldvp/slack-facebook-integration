require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Hello World 👋',
    });
});

app.listen(PORT, () => {
    console.log(`Server up and running at : ${PORT}`);
});
