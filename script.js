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
              $(".wind").text("Wind Speed: " + response.wind.speed);
              $(".humidity").text("Humidity: " + response.main.humidity);
              var tempF = (response.main.temp - 273.15) * 1.80 + 32;
              $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
        
              
              
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