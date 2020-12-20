const request = require("request");

//Create forecast()
const forecast = (latitude, longitude, callback) => {
  //URL
  const url =
    "http://api.weatherstack.com/current?access_key=9ce2146b59e559704c8ef798d5315358&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  //Request URL
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.location.localtime +
          ", " +
          body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out. And it has humidity " +
          body.current.humidity
      );
    }
  });
};

module.exports = forecast;
