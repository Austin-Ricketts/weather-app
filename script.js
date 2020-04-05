$(document).ready(function() {

    $(".btn-primary").on("click", function() {
        var apiKey = "14275cb63b6d277176cc8032394e4196";
        var userInput = $.trim($("#city-search").val().toString());
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              console.log(response);
              $(".city").html("<h1>" + response.name + " Weather Details</h1>");
              $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
              $(".humidity").text("Humidity: " + response.main.humidity + "%");
              var tempF = (response.main.temp - 273.15) * 1.80 + 32;
              $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
              $(".cloud").text("Cloudiness: " + response.clouds.all + "%");
        
              
              
            });
      });

      $(".btn-primary").on("click", function() {
        var apiKey = "14275cb63b6d277176cc8032394e4196";
        var fiveDayInput = $.trim($("#five-day-search").val().toString());
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + fiveDayInput + "&appid=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              console.log(response);
              var list = response.list;
              console.log(list);

              /*$(".five-city-4").html("<h1>" + response.city.name + " Weather Details</h1>");*/
              $(".five-wind-4").text("Wind Speed: " + response.list[4].wind.speed + " mph");
              $(".five-humidity-4").text("Humidity: " + response.list[4].main.humidity + "%");
              var tempF = (response.list[4].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-4").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-4").text("Cloudiness: " + response.list[4].clouds.all + "%");
              
              /*$(".five-city-12").html("<h1>" + response.city.name + " Weather Details</h1>");*/
              $(".five-wind-12").text("Wind Speed: " + response.list[12].wind.speed + " mph");
              $(".five-humidity-12").text("Humidity: " + response.list[12].main.humidity + "%");
              var tempF = (response.list[12].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-12").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-12").text("Cloudiness: " + response.list[12].clouds.all + "%");
              
              /*$(".five-city-20").html("<h1>" + response.city.name + " Weather Details</h1>");*/
              $(".five-wind-20").text("Wind Speed: " + response.list[20].wind.speed + " mph");
              $(".five-humidity-20").text("Humidity: " + response.list[20].main.humidity + "%");
              var tempF = (response.list[20].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-20").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-20").text("Cloudiness: " + response.list[20].clouds.all + "%");
              
              /*$(".five-city-28").html("<h1>" + response.city.name + " Weather Details</h1>");*/
              $(".five-wind-28").text("Wind Speed: " + response.list[28].wind.speed + " mph");
              $(".five-humidity-28").text("Humidity: " + response.list[28].main.humidity + "%");
              var tempF = (response.list[28].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-28").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-28").text("Cloudiness: " + response.list[28].clouds.all + "%");
              
              /*$(".five-city-36").html("<h1>" + response.city.name + " Weather Details</h1>");*/
              $(".five-wind-36").text("Wind Speed: " + response.list[36].wind.speed + " mph");
              $(".five-humidity-36").text("Humidity: " + response.list[36].main.humidity + "%");
              var tempF = (response.list[36].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-36").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-36").text("Cloudiness: " + response.list[36].clouds.all + "%");
                  

              /*$(".five-city-4").html("<h1>" + response.city.name + " Weather Details</h1>");
              $(".five-wind-4").text("Wind Speed: " + response.element[i].wind.speed + " mph");
              $(".five-humidity-4").text("Humidity: " + response.element[i].main.humidity + "%");
              var tempF = (response.element[i].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-4").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-4").text("Cloudiness: " + response.element[i].clouds.all + "%");*/
        
              
              
            });
      });

    /*getStorage();

    function getStorage() {
        var cityNames = JSON.parse(localStorage.getItem("cities", ""));
        console.log(cityNames);
    
        $("#city-names").val(cityNames); 
    }

    $(".btn-primary").on("click", function(event) {
        event.preventDefault();
        var cityInfo = $.trim($("#city-search").val());
        localStorage.setItem("cities", JSON.stringify(cityInfo));
        console.log(cityInfo);
        $("#city-names").prepend(cityInfo);
      });*/

      



    

        
        
   
  










});