debugger
$(document).ready(function(){
    $('#submitWeather').click(function(){

        var city = $("#city").val();
        var days = $("#days").val();

        if(city != '' && days !=''){

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    var widget = show(data);
                    console.log(data);

               
                 
                  
                    $("#show").html(widget);

                    $("#city").val('');
                    $("#days").val('');
                }
            });

        }else{
            $("#error").html("<div class='alert alert-danger' id='errorCity><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
        }
    });
});

$.ajax({

    url: 'http://api.openweathermap.org/data/2.5/uvi/history?lat=37.75&lon=-122.37&start=1498049953&end=1498481991' + city + "&units=imperial" + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
        var widget = show(data);
        console.log(data);
    }

    });


function show(data){
    return "<h3 style='font-size:40px; font-weight: bold;'>Current Weather for " +data.name + ", " + data.sys.country +"</h2>" +
    "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
    "<h3 style='padding-left:40px;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/ "+ data.weather[0].icon +".png'>"+ data.weather[0].description+ "</h3>" +
    "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
    "<h3 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
    "<h3 style='padding-left:40px;'><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
    "<h3 style='padding-left:40px;'><strong>Wind-Direction</strong>: " + data.wind.deg + "&deg;</h3>" +
    "<h3 style='padding-left:40px;'><strong>UV-Index</strong>: " + data.main.uv + "&deg;</h3>";
}

function storeItem(city) {
    var cities;
    if (localStorage.getItem("cities") === null) {
      cities = [];
    } else {
      cities = JSON.parse(localStorage.getItem("cities"));
    };
}

    

