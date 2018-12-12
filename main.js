/*********COUNTDOWN*********/ 
var interval;

function countDown(){
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 5, 2019 10:00:00").getTime();

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in the elements with id's days, hours, minutes and seconds
         // Output the result in an element with id="demo"
        document.getElementById("countdownWrapper").innerHTML = days + " Dage " + hours + " Timer "
                                                        + minutes + " Min " + seconds + " Sek ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdownWrapper").innerHTML = "KROPPENS DAG ER IGANG NU!";
        }
};
interval = setInterval(countDown,1000);


/*******TOGGLE CLICK PÅ COUNTDOWN********/

function toggleCountDown(){
    var countdownElement = document.getElementById("countdownWrapper");
            
    countdownElement.addEventListener("click", function(){

        if(countdownElement.classList.contains("activated")){
            interval = setInterval(countDown,1000);
            countdownElement.classList.remove("activated");
            console.log("I was clicked");
        }
        else{
            clearInterval(interval);
            countdownElement.innerHTML = "5. APRIL 2019 KL 10-17";
            countdownElement.classList.add("activated");
        }
    });
};

toggleCountDown();




/**************PROGRAM ANIMATION****************/
    
    
var acc = document.getElementsByClassName("accordion"); 
 
for (i = 0; i < acc.length; i++) {   // For loop. Array = acc. Løb Array igennem. Length = hvor mange elementer der er. Den tager alle loops, istedet for at man skal skrive det hundrede gange.
  acc[i].addEventListener("click", function() { // Array
    this.classList.toggle("active"); // hver gang vi klikker, skal den have active og ikke active. Toggle betyder active/ikke active
    var panel = this.nextElementSibling; // panel er "child" element. I html er "panel" under "accordion" og derfor er det child element. 
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // her beskrives hvordan den skubber teksten ned, alt efter hvor meget der står. 
    } 
  });
};



/**************LIGHTBOX******************/

var lightbox1 = document.getElementById('lightbox1');
var lightbox2 = document.getElementById('lightbox2');
var lightbox3 = document.getElementById('lightbox3');
var lightbox = document.getElementsByClassName('lightbox');
var menubtn = document.getElementsByClassName("menubtn");
var closeBtn = document.getElementsByClassName("close");

// When click, open the modal

    for(i = 0; i < menubtn.length; i++){
        menubtn[i].onclick = function(clickedBtn) {
            if(clickedBtn.target == document.getElementById("hvhvhvBtn")){
                lightbox1.style.display = "block";
                lightbox2.style.display = "none";
                lightbox3.style.display = "none";
            }
            if(clickedBtn.target == document.getElementById("programBtn")){
                lightbox2.style.display = "block";
                lightbox1.style.display = "none";
                lightbox3.style.display = "none";
                console.log("this the program");
                console.log(lightbox2.style.getPropertyValue("display"));
            }
            if(clickedBtn.target == document.getElementById("contactBtn")){
                lightbox3.style.display = "block";
                lightbox1.style.display = "none";
                lightbox2.style.display = "none";
                console.log("this the contact");
            }
        }
    };

    for(i = 0; i < closeBtn.length; i++){
        closeBtn[i].onclick = function() {
            lightbox1.style.display = "none";
            lightbox2.style.display = "none";
            lightbox3.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }
