$(document).ready(function() {
    $('#submitForecast').click(function() {
        return getForecast();

    });

});

function getForecast() {
    var city = $("#city").val();
    var days = $("#days").val();

    if(city != "" && days != '') {

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + days + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                console.log(data);

                var table = '';

                for(var i =0; i < data.list.length; i++){
                    table += "<tr>";

                    table += "<td>" + data.list[i].weather[0].icon + "</td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                  
                     table += "<td>" + data.list[i].temp_min + "&deg;F</td>";
                    //  table += "<td>" + data.list[i].temp.max + "&deg;F</td>";
                    //  table += "<td>" + data.list[i].pressure + "hpa</td>";
                    //  table += "<td>" + data.list[i].humidity + "%</td>";
                    //  table += "<td>" + data.list[i].speed + "m/s</td>";
                    //  table += "<td>" + data.list[i].deg + "&deg;F</td>";
                    

                    table += "</tr>";
                }

                $("#forecastWeather").html(table);

                $("#city").val('');
                $("#days").val('')
            }
        
        });

    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
    }
}
