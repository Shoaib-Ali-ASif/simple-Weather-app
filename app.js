// JavaScript code for weather app functionality (mock data)

// Simulated data
const weatherData = {
    location: 'City, Country',
    temperature: '25°C',
    conditions: 'Sunny'
  };
  
  // Update the weather card with the provided data
  function updateWeatherCard(data) {
    const locationElement = document.querySelector('.location');
    const temperatureElement = document.querySelector('.temperature');
    const conditionsElement = document.querySelector('.conditions');
  
    locationElement.textContent = data.location;
    temperatureElement.textContent = data.temperature;
    conditionsElement.textContent = data.conditions;
  }
  
  // Initialize the weather card with the simulated data
  updateWeatherCard(weatherData);
  