$.get("https://api.ipdata.co?api-key=5bc422e8663f4069c635763826bbf9bb9875e3ba2fc09d4023ac138d", function (response) {
  $("#ip").html("<b>IP</b>: " + response.ip);
  $("#city").html("<b>City and region:</b> "+response.city + ", " + response.region );
  $.get("https://api.waqi.info/feed/"+response.city+"/?token=00511bf7110fea6e29dc68a3ad59d09506e48848", function (response){
    $("#aqi").html("<b>Air Quality Index:</b> " +response.data.aqi);
  }, "jsonp");
  }, "jsonp");