// Init objects
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

// Get Weather on load
document.addEventListener("DOMContentLoaded", getWeather);

// // Get Location and update weather
// window.addEventListener("load", () => {
//   let lon;
//   let lat;

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       lon = position.coords.longitude;
//       lat = position.coords.latitude;

//       const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=affd84b782a152060c4ac107c04b3253&units=metric`;

//       fetch(api)
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//     });
//   }
// });

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;

  weather.changeLocation(city, state);
  storage.setData(city, state);
  document.querySelector("#city").value = "";
  document.querySelector("#state").value = "";

  getWeather();
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // Paint UI
      ui.paint(results);

      //  Convert Degrees
      document.querySelector("#w-string").addEventListener("click", () => {
        ui.convertDeg(results);
      });
    })
    .catch((err) => console.log(err));
}
