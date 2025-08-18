const axios = require('axios');
const API_KEY = process.env.OPENWEATHER_API_KEY;

const getWeather = async (req, res, next) => {
    try {
        const { city } = req.query;

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);

        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }

        next(error); 
    }
};

module.exports = {
    getWeather
};
