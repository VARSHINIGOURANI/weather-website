function getWeather() {
    // Replace this sample data with actual API fetch
    const sampleData = {
      name: 'hyderabad',
      sys: { country: 'india' },
      main: { temp: 25, humidity: 50 },
      weather: [{ description: 'Clear sky' }]
    };
  
    displayWeather(sampleData);
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  }
  
  