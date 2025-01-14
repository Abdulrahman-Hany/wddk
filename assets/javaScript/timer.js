/*----------------------------------------------------------------*/
 const inputTime = { hours: 3, minutes: 40, seconds: 30 }; 

 const totalTime =
   (inputTime.hours || 0) * 3600 +
   (inputTime.minutes || 0) * 60 +
   (inputTime.seconds || 0);
 
 const timerDisplay = document.getElementById("time");
 const circle = document.querySelector(".progress-ring__circle");
 const circumference = 2 * Math.PI * 90;
 
 circle.style.strokeDasharray = circumference;
 
 let startTime = localStorage.getItem("startTime");
 
 if (!startTime) {
   startTime = Date.now();
   localStorage.setItem("startTime", startTime);
 }
     
 function updateTimer() {
   const currentTime = Date.now();
   const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); 
   const remainingTime = totalTime - elapsedSeconds;
 
   if (remainingTime > 0) {
     const hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
     const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, "0");
     const seconds = String(remainingTime % 60).padStart(2, "0");
 
     timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
 
     const offset = circumference - (remainingTime / totalTime) * circumference;
     circle.style.strokeDashoffset = offset;
   } else {
     timerDisplay.textContent = "00:00:00";
     circle.style.strokeDashoffset = circumference;
     localStorage.removeItem("startTime");
     clearInterval(timer);
   }
 }
 
 updateTimer();
 const timer = setInterval(updateTimer, 1000);