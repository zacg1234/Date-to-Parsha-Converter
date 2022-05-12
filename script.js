
  /// getting the parsha
  var day;
  var month;
  var year;
  var date;
  var hebCalURL;
  var parsha;
  function getDate(){
    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    date = month + "/" + day + "/" + year;
  }
  
  const callHebCal = async () => {
    if (day < 10) { // day is converted to DD format
      day = "0" + day;
    }
    //console.log(day);
    var startDate = year + "-" + month + "-" + day; // start date compiled

    day = parseInt(day) + 7; // day is converted back to int for addition 
    if (day < 10) { // day is converted to DD format
      day = "0" + day;
    }
    //console.log(day);
    var endDate = year + "-" + month + "-" + day;

    //hebCalURL = "https://www.hebcal.com/hebcal?v=1&cfg=json&year=" + year + "&month=" + month + "&s=on"
    hebCalURL = "https://www.hebcal.com/hebcal?v=1&cfg=json&start=" + startDate + "&end=" + endDate + "&s=on"
    const response = await fetch(hebCalURL);
    const json = await response.json();
    //console.log(json);

    parsha = json.items[0].title;
    var result = document.getElementById("result");
    result.innerText = "The parsha on " + date + " is: " + parsha;
  }

  function getParsha() {
    //console.log("get parsha called");
    getDate();
    if (day > 31 || day < 1){
      alert("the day is out of range")
      return;
    }
    if (year < 1700 || year > 2200){
      alert("the year is out of range")
      return;
    }
    callHebCal();
  }