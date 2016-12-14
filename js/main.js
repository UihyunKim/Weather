$(document).ready(function() {

  // restructuring for async
  main(function (data) {
    // console.log("location: " + location);
    var locationArr = data.loc.split(",");

    var geoData = {
      longitude: "",
      lattitude: "",
      city: "",
      country: "",
    };

    // Assign values
    geoData.longitude = locationArr[0];
    geoData.lattitude = locationArr[1];
    geoData.city = data.city;
    geoData.country = data.country;

    // Assign check
    console.log("geoData.longitude: " + geoData.longitude);
    console.log("geoData.lattitude: " + geoData.lattitude);
    console.log("geoData.city: " + geoData.city);
    console.log("geoData.country: " + geoData.country);


    // Get whether from openweathermap
    getWhether(function (data) {
      var weatherData = {
        description: "",
        icon: ""
      };

      weatherData.description = data.weather[0].description;
      weatherData.icon = data.weather[0].icon;
      weatherData.id = data.weather[0].id;

      console.log("weatherData.description: " + weatherData.description);
      console.log("weatherData.icon: " + weatherData.icon);
      console.log("weatherData.id: " + weatherData.id);


    });

    function getWhether(callback) {
      // Build url for openweathermap
      var requestUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + geoData.lattitude + "&lon=" + geoData.longitude + "&appid=82b6bdbc4425d3443093fa5f8557ba0f";

      $.getJSON(requestUrl, function(data) {
        callback(data);
      });
    }


  });


  // Get current location from ipinfo
  function main(callback) {
    $.getJSON('http://ipinfo.io', function(data) {

      for (var key in data) {
        console.log(key + ": " + data[key]);
      }

      callback(data);
    }); // end of getJSON
  }



}); // end of ready(function)