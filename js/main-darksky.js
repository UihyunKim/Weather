$(document).ready(function() {

    // Get current location from ipinfo
    function main(callback) {
        $.getJSON('https://ipinfo.io', function(data) {
            for (var key in data) {
                console.log(key + ": " + data[key]);
            }
            callback(data);
        }); // end of getJSON
    }

    // restructuring for async
    main(function(data) {
        var geoData = {
            longitude: data.loc.split(",")[1],
            lattitude: data.loc.split(",")[0],
            city: data.city,
            country: data.country,
        };

        console.log("geoData.longitude: " + geoData.longitude);
        console.log("geoData.lattitude: " + geoData.lattitude);
        console.log("geoData.city: " + geoData.city);
        console.log("geoData.country: " + geoData.country);


        function getWeather(callback) {
            var url = "https://api.darksky.net/forecast/";
            var key = "bfc98e0ef4bb882bc52e6f53f5f00794/";
            var option = "?units=si&exclude=minutely,hourly,daily,alerts,flags&callback=?";
            var lattNlong = geoData.lattitude + "," + geoData.longitude;
            var requestUrl = url + key + lattNlong + option;
            console.log("requestUrl: " + requestUrl);
            $.getJSON(requestUrl, function(data) {
                callback(data);
            });
        }

        // import data
        getWeather(function(data) {
            var weatherData = {};

            weatherData.description = data.currently.summary;
            weatherData.icon = data.currently.icon;
            weatherData.celcius = +data.currently.temperature.toFixed();
            weatherData.fahrenheit = (weatherData.celcius * 9 / 5 + 32).toFixed(0);

            console.log("weatherData.description: " + weatherData.description);
            console.log("weatherData.icon: " + weatherData.icon);
            console.log("weatherData.celcius: " + weatherData.celcius + " \xB0C");

            // function
            // display background-color following day or night.
            if (weatherData.icon.search("day")) {
                $("html body").css("background-color", "#07A88C");
                console.log("background-color is changed for day!");
            } else {
                $("html body").css("background-color", "#0A2532");
                console.log("background-color is changed for night!");
            }

            // function: icon
            // display icon following current weather.
            var currentIcon = weatherData.icon;
            console.log("currentIcon: " + currentIcon);
            $("#currentIcon").attr("id", currentIcon);

            // function: temperature 1
            // display temperature
            $("#currentTemp").html("<h2>" + weatherData.celcius + "<span id='celcius'> \xB0C</span></h2>");

            // function: temperature 2
            // change temperature between celcius and fahrenheit
            $("#currentTemp").click(function() {
                if ($("#celcius").html().indexOf("F") === 2) {
                    $("#currentTemp").html("<h2>" + weatherData.celcius + "<span id='celcius'> \xB0C</span></h2>");
                    console.log("Changed into celcius");
                } else if ($("#celcius").html().indexOf("C") === 2) {
                    $("#currentTemp").html("<h2>" + weatherData.fahrenheit + "<span id='celcius'> \xB0F</span></h2>");
                    console.log("Changed into fahrenheit");
                }
            });

            // display description
            $("#currentDescription").html("<h3>" + weatherData.description + "</h3");

            // display region
            $("#region").html("<h3>" + geoData.city + "</h3>");



            var icons = new Skycons({"color": "white"}),
                list = [
                    "clear-day", "clear-night", "partly-cloudy-day",
                    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                    "fog"
                ],
                i;
            for (i = list.length; i--;)
                icons.set(list[i], list[i]);
            icons.play();
        }); // end of getWeather();


    }); // end of main();


}); // end of ready();
