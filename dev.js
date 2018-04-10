const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static(__dirname));

app.listen(PORT);
console.log(`ToDo-Concept Dev Server is listening on port ${PORT}`);
