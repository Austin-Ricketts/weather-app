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
              $(".main").text("Main Weather: " + response.weather[0].main + ", specifically " + response.weather[0].description);
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

              var now = moment();
              var firstDay = now.format("MMMM-DD-YYYY");
              var now = moment();
              var secondDay = now.add(1, "d").format("MMMM-DD-YYYY");
              var now = moment();
              var thirdDay = now.add(2, "d").format("MMMM-DD-YYYY");
              var now = moment();
              var fourthDay = now.add(3, "d").format("MMMM-DD-YYYY");
              var now = moment();
              var fifthDay = now.add(4, "d").format("MMMM-DD-YYYY");

              $(".first-day").text(firstDay);
              $(".five-wind-4").text("Wind Speed: " + response.list[4].wind.speed + " mph");
              $(".five-humidity-4").text("Humidity: " + response.list[4].main.humidity + "%");
              var tempF = (response.list[4].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-4").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-4").text("Cloudiness: " + response.list[4].clouds.all + "%");
              
              $(".second-day").text(secondDay);
              $(".five-wind-12").text("Wind Speed: " + response.list[12].wind.speed + " mph");
              $(".five-humidity-12").text("Humidity: " + response.list[12].main.humidity + "%");
              var tempF = (response.list[12].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-12").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-12").text("Cloudiness: " + response.list[12].clouds.all + "%");
              
              $(".third-day").text(thirdDay);
              $(".five-wind-20").text("Wind Speed: " + response.list[20].wind.speed + " mph");
              $(".five-humidity-20").text("Humidity: " + response.list[20].main.humidity + "%");
              var tempF = (response.list[20].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-20").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-20").text("Cloudiness: " + response.list[20].clouds.all + "%");
              
              $(".fourth-day").text(fourthDay);
              $(".five-wind-28").text("Wind Speed: " + response.list[28].wind.speed + " mph");
              $(".five-humidity-28").text("Humidity: " + response.list[28].main.humidity + "%");
              var tempF = (response.list[28].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-28").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-28").text("Cloudiness: " + response.list[28].clouds.all + "%");
              
              $(".fifth-day").text(fifthDay);
              $(".five-wind-36").text("Wind Speed: " + response.list[36].wind.speed + " mph");
              $(".five-humidity-36").text("Humidity: " + response.list[36].main.humidity + "%");
              var tempF = (response.list[36].main.temp - 273.15) * 1.80 + 32;
              $(".five-tempF-36").text("Temperature (F) " + tempF.toFixed(2));
              $(".five-cloud-36").text("Cloudiness: " + response.list[36].clouds.all + "%");
        
              
              
            });
      });

    


    function getStorage() {

        var cityList = JSON.parse(localStorage.getItem("localArray"));
        console.log(cityList);
        if (cityList !== null) {
        localArray = cityList;
  }





        /*var cityNames = JSON.parse(localStorage.getItem("cities"));
        console.log(cityNames);
        var btnAdd = $("ul").prepend("<button></button>");
        btnAdd.html($.trim($(cityNames).val()));*/


        


    }
    
    

    
    /*$(".btn-primary").on("click", function(event) {
        event.preventDefault();
        var city = $("#city-search").val();

        

        
        
        var key = $("#city-search").val();
        localStorage.setItem(key, city);
        
        var keyLoop = localStorage.key("");
        console.log(keyLoop);

        for (let i = 0; i < keyLoop.length; i++) {
            const element = keyLoop[i];
            console.log(element);
            var b = $("<button>");
          // Adding a class of movie to our button
          b.addClass("city");
          // Adding a data-attribute
          b.attr("data-name", element);
          // Providing the initial button text
          b.text(element);
          // Adding the button to the HTML
          $("#buttons").append(b);
            
        }

      });

      getStorage();
      

      /*var cityInfo = $.trim($("#city-search").val());
        localStorage.setItem("cities", JSON.stringify(cityInfo));
        console.log(cityInfo);*/

      



    

        
        
   
  










});