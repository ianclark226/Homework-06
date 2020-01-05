$(document).ready(function() {
    $("#submitForecast").click(function() {
return getForcast();
    });

});

function getForcast() {
    var city = $("#city").val();
    var days = $("#days").val();

    if(city != "" && days != '') {

        $.ajax({
            url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + days + "&APPID=49034a6efdfe8d07c20b64468ee472fe",
        
        });

    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
    }
}