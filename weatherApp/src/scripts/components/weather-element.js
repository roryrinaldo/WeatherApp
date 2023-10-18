import axios from 'axios';

class WeatherElement extends HTMLElement {
  async connectedCallback() {
    const locationInput = this.querySelector('#location-input');
    const submitButton = this.querySelector('#submit-button');

    submitButton.addEventListener('click', async () => {
      const location = locationInput.value;
      if (location) {
        try {
          const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=41bb6ad11a8e4233b9e51137231810&q=${location}`);
          const weatherData = response.data.current;
          const weatherIconUrl = `https:${weatherData.condition.icon}`;

          const weatherDataElement = this.querySelector('#weather-data');
          weatherDataElement.innerHTML = `
            <div class="card" style="margin-top:10px">
                <div class="card-body">
                    <h2 class="card-title">${response.data.location.name}</h2>  <img src="${weatherIconUrl}" alt="Weather Icon">
                    <p class="card-text">Temperature: ${weatherData.temp_c}°C</p>
                    <p class="card-text">Weather: ${weatherData.condition.text}</p>
                    <p class="card-text">Humidity: ${weatherData.humidity}%</p>
                    <p class="card-text">Wind Speed: ${weatherData.wind_kph} km/h</p>
                    <p class="card-text">Precipitation: ${weatherData.precip_mm} mm</p>
                </div>
            </div>
                `;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    });
  }
}

customElements.define('weather-element', WeatherElement);
