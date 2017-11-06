$(document).ready(function() {

    $.get("https://ipinfo.io", function(response) {
        console.log(response.ip, response.country);
    }, "jsonp")

    // Get current location from ipinfo
    // function main(callback) {
    //     $.getJSON('http://ipinfo.io', function(data) {
    //
    //         for (var key in data) {
    //             console.log(key + ": " + data[key]);
    //         }
    //
    //         callback(data);
    //     }); // end of getJSON
    // }
    //
    // main(function (data) {
    //     console.log(data);
    // });

    // restructuring for async
    // main(function(data) {
    //     // console.log("location: " + location);
    //     var locationArr = data.loc.split(",");
    //     var geoData = {
    //         longitude: "",
    //         lattitude: "",
    //         city: "",
    //         country: "",
    //     };
    //
    //     // Assign values
    //     geoData.longitude = locationArr[1];
    //     geoData.lattitude = locationArr[0];
    //     geoData.city = data.city;
    //     geoData.country = data.country;
    //
    //     // Assign check
    //     console.log("geoData.longitude: " + geoData.longitude);
    //     console.log("geoData.lattitude: " + geoData.lattitude);
    //     console.log("geoData.city: " + geoData.city);
    //     console.log("geoData.country: " + geoData.country);
    //
    //
    //     // import data
    //     // Get whether from openweathermap
    //     getWhether(function(data) {
    //         var weatherData = {};
    //
    //         weatherData.description = data.weather[0].description;
    //         weatherData.icon = data.weather[0].icon;
    //         weatherData.id = data.weather[0].id;
    //         weatherData.kelvin = data.main.temp; // by Kelvin, need to change into C or F.
    //         weatherData.celcius = (weatherData.kelvin - 273.15).toFixed(0);
    //         weatherData.fahrenheit = ((weatherData.kelvin - 273.15) * 9 / 5 + 32).toFixed(0);
    //
    //         console.log("weatherData.description: " + weatherData.description);
    //         console.log("weatherData.icon: " + weatherData.icon);
    //         console.log("weatherData.id: " + weatherData.id);
    //         console.log("weatherData.temp: " + weatherData.kelvin + " Kevin"); // by Kelvin, need to change into C or F.
    //         console.log("weatherData.celcius: " + weatherData.celcius + " \xB0C");
    //         console.log("weatherData.fahrenheit: " + weatherData.fahrenheit + " \xB0F");
    //
    //
    //         // function
    //         // display background-color following day or night.
    //         if (weatherData.icon.indexOf('d') === 2) {
    //             $("html body").css("background-color", "#07A88C");
    //             console.log("background-color is changed for day!");
    //         } else {
    //             $("html body").css("background-color", "#0A2532");
    //             console.log("background-color is changed for night!");
    //         }
    //
    //
    //         // function: icon
    //         // display icon following current weather.
    //         var currentIcon = "wi-owm-";
    //         currentIcon += weatherData.id;
    //         console.log("currentIcon: " + currentIcon);
    //         $("#currentIcon").addClass(currentIcon);
    //
    //
    //         // function: temperature 1
    //         // display temperature
    //         $("#currentTemp").html("<h2>" + weatherData.celcius + "<span id='celcius'> \xB0C</span></h2>");
    //
    //         // function: temperature 2
    //         // change temperature between celcius and fahrenheit
    //         $("#currentTemp").click(function() {
    //             if ($("#celcius").html().indexOf("F") === 2) {
    //                 $("#currentTemp").html("<h2>" + weatherData.celcius + "<span id='celcius'> \xB0C</span></h2>");
    //                 console.log("Changed into celcius");
    //             } else if ($("#celcius").html().indexOf("C") === 2) {
    //                 $("#currentTemp").html("<h2>" + weatherData.fahrenheit + "<span id='celcius'> \xB0F</span></h2>");
    //                 console.log("Changed into fahrenheit");
    //             }
    //         });
    //
    //
    //         // function
    //         // display description
    //         $("#currentDescription").html("<h3>" + weatherData.description + "</h3");
    //
    //         // function
    //         // display region
    //         $("#region").html("<h3>" + geoData.city + "</h3>");
    //
    //
    //
    //
    //
    //     });
    //
    //     function getWhether(callback) {
    //         // Build url for openweathermap
    //         var requestUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + geoData.lattitude + "&lon=" + geoData.longitude + "&appid=82b6bdbc4425d3443093fa5f8557ba0f";
    //         console.log("requestUrl: " + requestUrl);
    //         $.getJSON(requestUrl, function(data) {
    //             callback(data);
    //         });
    //     }
    // }); // end of main();


}); // end of ready(function)
