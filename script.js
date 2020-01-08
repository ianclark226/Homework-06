
$(document).ready(function(){
    $('#submitWeather').click(function(){
      
        var city = $("#city").val();
        var days = $("#days").val();
        
        if(city != '' && days !=''){

            var lat = ""
            var lon = ""

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    var widget = show(data);
                    
                    lat = data.coord.lat
                    lon = data.coord.lon
                    

                    $("#show").html(widget);

                    $("#city").val('');
                    $("#days").val('');
                }
            }).then(function() {$.ajax({
                url: 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + "&units=imperial" + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
                type: "GET",
                dataType: "json",
                success: function(data) {
                    
                    $("#show").append("<h3 style='padding-left:40px;'><strong>UV-Index</strong>: " + data.value + "</h3>");
            
                    $("#city").val('');
                    $("#days").val('');
                },
            })})
        

        }else{
            $("#error").html("<div class='alert alert-danger' id='errorCity><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
        }
    });
});







function show(data){

   
    return "<h3 style='font-size:40px; font-weight: bold;'>Current Weather for " +data.name + ", " + data.sys.country +"</h2>" +
    "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
    "<h3 style='padding-left:40px;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon +".png'>"+ data.weather[0].description+ "</h3>" +
    
    "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
    "<h3 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
    "<h3 style='padding-left:40px;'><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;F</h3>" +
    "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
    "<h3 style='padding-left:40px;'><strong>Wind-Direction</strong>: " + data.wind.deg + "&deg;</h3>";


}


    

