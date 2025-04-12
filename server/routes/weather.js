const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res) => {
    const city = req.query.city || 'Mathura';
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.cod !== 200) {
            return res.status(data.cod).json({ error: data.message });
        }
        res.json(data);
    } catch (error) {
        if (error.response.status) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

module.exports = router;