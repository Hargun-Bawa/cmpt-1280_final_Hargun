function change(){
    x = document.getElementById('format').innerHTML;
    if ( x=== "12-hr"){
        x = "24-hr";

    }
    else if(x="24-hr"){
        x = "12-hr";
    }
    document.getElementById('format').innerHTML = x;
    
}

var x = setInterval(function() {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday" , "friday", "saturday"];


    var now = new Date().getTime();
    const r = new Date();
    const d = months[r.getMonth()].toUpperCase() + " " + r.getDate() + " " + r.getFullYear();
    document.getElementById("date").innerHTML = d;
    document.getElementById("day").innerHTML = days[r.getDay()].toUpperCase();
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    if(document.getElementById("format").innerHTML === "24-hr") {
        if(hours > 11){
            document.getElementById("ampm").innerHTML = "PM";
        }
        else {
            document.getElementById("ampm").innerHTML = "AM";

        }
        hours = hours%12;
        
    };
    if(document.getElementById("format").innerHTML === "12-hr"){
        document.getElementById("ampm").innerHTML = " ";
    }
    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((now % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("hour").innerHTML =  hours;
    document.getElementById("minute").innerHTML =  minutes;
    document.getElementById("second").innerHTML =  seconds;

  
  }, 1000);