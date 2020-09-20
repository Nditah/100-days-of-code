class Weather {
  constructor(city, country) {
    this.apiKey = "affd84b782a152060c4ac107c04b3253";
    this.city = city;
    this.country = country;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  //change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
