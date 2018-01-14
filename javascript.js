$(document).ready(function () {
    "use strict";
    
    var strYoutubeURL;
    
    $("#btnConvert").click(
        function (strYoutubeURL) {
            strYoutubeURL = $("#txtURL").val();
            console.log(strYoutubeURL);
        }
    );
});