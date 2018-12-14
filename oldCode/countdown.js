
var interval;
// Set the date we're counting down to
var countDownDate = new Date("Apr 5, 2019 10:00:00").getTime();

function countDown(){
    // Get todays date and time
    var now = new Date().getTime();
            
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "/nDage " + hours + " Timer "
    + minutes + "Minutter " + seconds + "Sekunder ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "KROPPENS DAG ER IGANG NU!";
    }
};
interval = setInterval(countDown,1000);

var countdownElement = document.getElementById("countdown");


countdownElement.addEventListener("click", function(){
    if(countdownElement.classList.contains("active")){
        interval = setInterval(countDown,1000);
        countdownElement.classList.remove("active");
        console.log("I was Clicked");
    }
    else{
        clearInterval(interval);
        countdownElement.innerHTML = "5. APRIL 2019 KL 10-17";
        countdownElement.classList.add("active");
    }
});

    