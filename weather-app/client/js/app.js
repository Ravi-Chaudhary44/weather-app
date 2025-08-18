
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    
    searchBtn.addEventListener('click', fetchWeather);
    cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            fetchWeather();
        }
    });

    async function fetchWeather() {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const response = await fetch(`https://weather-app-server-iv4r.onrender.com/api/weather?city=${encodeURIComponent(city)}`);

            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            updateWeatherUI(data);
        } catch (error) {
            alert(error.message);
            console.error('Error fetching weather data:', error);
        }
    }

    function updateWeatherUI(data) {
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('country').textContent = data.sys.country;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind').textContent = `${data.wind.speed} km/h`;
        document.getElementById('conditions').textContent = data.weather[0].description;
        
       
      
    }
});