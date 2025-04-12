const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const weather = require('./routes/weather');

app.use(cors());    
app.use('/weather', weather);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});