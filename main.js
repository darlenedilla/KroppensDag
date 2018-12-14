/*********COUNTDOWN*********/ 
var interval;

function countDown(){
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 5, 2019 10:00:00").getTime();
    console.log(countDownDate);

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
    
    //Tilføjer event listener på hver elemenet med id="countdownWrapper"
    countdownElement.addEventListener("click", function(){

        //Tjekker om countdownElement har class="activated"
        if(countdownElement.classList.contains("activated")){

            //Kalder setInterval for at starte countdown igen
            interval = setInterval(countDown,1000);
            countdownElement.classList.remove("activated");
        }
        else{
            //Kalder clearInterval for at stoppe countdown
            clearInterval(interval);
            countdownElement.innerHTML = "5. APRIL 2019 KL 10-17";
            countdownElement.classList.add("activated");
        }
    });
};

toggleCountDown();




/**************PROGRAM ANIMATION****************/
    
    
var acc = document.getElementsByClassName("accordion"); // Der bliver lavet en variabel der hedder acc. Variablens værdi er alle de klasser som hedder accordion. Den kalder på alle elementerne i html der hedder accordion
 
for (i = 0; i < acc.length; i++) {     
  acc[i].addEventListener("click", function() {  
    this.classList.toggle("active"); //Toggler mellem at tilføje og fjerne class'en "active"
    var panel = this.nextElementSibling;  
    if (panel.style.maxHeight){ 
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; 
    } 
  });
};



/**************LIGHTBOX******************/

//Her defineres variablerne til hhv. lightbox elementerne og knapper i html
var lightbox1 = document.getElementById('lightbox1');
var lightbox2 = document.getElementById('lightbox2');
var lightbox3 = document.getElementById('lightbox3');
var lightbox = document.getElementsByClassName('lightbox');
var menubtn = document.getElementsByClassName("menubtn");
var closeBtn = document.getElementsByClassName("close");

// When click, open the modal
    for(i = 0; i < menubtn.length; i++){ 
        menubtn[i].onclick = function(clickedBtn) { // Tilføjer en eventlistener (click) til hver menuknap
            if(clickedBtn.target == document.getElementById("hvhvhvBtn")){ 
                lightbox1.style.display = "block"; 
                lightbox2.style.display = "none";
                lightbox3.style.display = "none"; 
            }
            if(clickedBtn.target == document.getElementById("programBtn")){ //Her tjekkes om den knap, der trykkes på har ID 'programBtn'
                lightbox2.style.display = "block"; 
                lightbox1.style.display = "none"; 
                lightbox3.style.display = "none"; 
            }
            if(clickedBtn.target == document.getElementById("contactBtn")){ 
                lightbox3.style.display = "block"; 
                lightbox1.style.display = "none"; 
                lightbox2.style.display = "none"; 
            }
        }
    };

    for(i = 0; i < closeBtn.length; i++){ 
        closeBtn[i].onclick = function() { // Tilføjer en eventlistener (click) til hver X-knap
            //Herunder skjules alle lightboxene
            lightbox1.style.display = "none";
            lightbox2.style.display = "none";
            lightbox3.style.display = "none";
        }
    }

    window.onclick = function(event) { // Tilføjer eventlistener (click) til vinduet
        if (event.target == lightbox) { // Tjekker om det, der clickes på er en lightbox
            lightbox.style.display = "none"; // Skjuler lightbox
        }
    }
