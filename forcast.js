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
            url: 'http://api.openweathermap.org/data/2.5/forecast/?q=' + city + "&units=imperial" + "&cnt=" + days + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {

                var getHistory = localStorage.getItem("search results");

                if (getHistory) {
                    city = getHistory.split(",");
                    renderButtons();
                }

                $("#clear-history").click(function() {
                    localStorage.clear();
                    city = [];
                    $("button.city-name").remove();
                });

                function renderButtons() {

                    var history = localStorage.getItem("search results") || 0;
                    localStorage.setItem("search results", city);

                    $("#recent-search").append(a);
                }
                

                

                var table = '';

                var header = 'h2 style="font-weight:bold; font-size 30px;"Weather forecast for ' + data.city.name + ',' + data.city.country + '</h2>'

                for(var i =0; i < data.list.length; i++){
                    table += "<tr>";

                    table += "<td> <img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'</td>"
                    
                   // table += "<td>" + data.list[i].weather[0].icon + "</td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                  
                     table += "<td>" + data.list[i].main.temp_min + "&deg;F</td>";
                     table += "<td>" + data.list[i].main.temp_max + "&deg;F</td>";
                     table += "<td>" + data.list[i].main.pressure + "hpa</td>";
                      table += "<td>" + data.list[i].main.humidity + "%</td>";
                      table += "<td>" + data.list[i].wind.speed + "m/s</td>";
                     table += "<td>" + data.list[i].wind.deg + "&deg;</td>";
                    

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


