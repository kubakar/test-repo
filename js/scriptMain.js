function initElements() {
  $("#qqq").click(function () {
    $(this).hide(500);
  });
}

// ===========================================

function sendData(varName, led) {
  var sendString = "setLED?";
  sendString += "var=" + varName + "&value=" + led;

  $.ajax({
    type: "GET",
    // url: "setLED?var=led_666&value=" + led,
    url: sendString,
    success: function (resp) {
      $("#LEDState").text(resp);
      console.warn("LED CHANGE - " + resp);
    },
  });
}

function getData() {
  $.ajax({
    type: "GET",
    url: "readADC",
    success: function (resp) {
      // console.log(resp);
      var sts_arr = JSON.parse(resp);

      $("#ADCValue_0").text(sts_arr[0]);
      $("#ADCValue_1").text(sts_arr[1]);
      $("#ADCValue_2").text(sts_arr[2]);
      $("#ADCValue_3").text(sts_arr[3]);
    },
  });
}

setInterval(function () {
  // Call a function repetatively with 1 Second interval
  getData();
}, 1000);

// single comment
// tool added
// tool new
