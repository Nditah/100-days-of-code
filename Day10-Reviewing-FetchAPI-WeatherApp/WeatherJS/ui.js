class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.description = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.pressure = document.querySelector("#w-dewpoint");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} F`;
    this.wind.textContent = `Wind: ${weather.wind.deg} degrees / speed: ${weather.wind.speed}`;
  }

  convertDeg(temp) {
    if (this.string.textContent[6] === "F") {
      const f = (temp.main.temp * 9) / 5 + 32;
      this.string.textContent = `${f.toFixed(2)} C`;
    } else if (this.string.textContent[6] === "C") {
      this.string.textContent = `${temp.main.temp} F`;
    }
  }
}
