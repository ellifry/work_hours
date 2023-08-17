document.addEventListener("DOMContentLoaded", function() {
    var checkInBtn = document.getElementById("checkInBtn");
    var checkOutBtn = document.getElementById("checkOutBtn");
  
    checkInBtn.addEventListener("click", function() {
      var currentTime = new Date().toLocaleTimeString();
      saveTime(currentTime, "Check In");
    });
  
    checkOutBtn.addEventListener("click", function() {
      var currentTime = new Date().toLocaleTimeString();
      saveTime(currentTime, "Check Out");
    });
  
    function saveTime(time, type) {
      google.script.run.saveTimeToSheet(time, type);
    }
  });
