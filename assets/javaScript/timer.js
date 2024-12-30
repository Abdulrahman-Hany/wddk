/*----------------------------------------------------------------*/
 // إعداد الوقت الكلي (بالساعات، الدقائق، والثواني)
 const inputTime = { hours: 3, minutes: 40, seconds: 30 }; // مثال: 1 دقيقة و30 ثانية

 // تحويل الوقت إلى ثوانٍ
 const totalTime =
   (inputTime.hours || 0) * 3600 +
   (inputTime.minutes || 0) * 60 +
   (inputTime.seconds || 0);
 
 const timerDisplay = document.getElementById("time");
 const circle = document.querySelector(".progress-ring__circle");
 const circumference = 2 * Math.PI * 90;
 
 circle.style.strokeDasharray = circumference;
 
 // استرجاع وقت البدء من localStorage أو تعيينه لأول مرة
 let startTime = localStorage.getItem("startTime");
 
 if (!startTime) {
   startTime = Date.now();
   localStorage.setItem("startTime", startTime);
 }
     
 // تحديث العداد
 function updateTimer() {
   const currentTime = Date.now();
   const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); // الوقت المنقضي بالثواني
   const remainingTime = totalTime - elapsedSeconds;
 
   if (remainingTime > 0) {
     // حساب الساعات والدقائق والثواني
     const hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
     const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, "0");
     const seconds = String(remainingTime % 60).padStart(2, "0");
 
     // تحديث نص الوقت
     timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
 
     // تحديث الدائرة
     const offset = circumference - (remainingTime / totalTime) * circumference;
     circle.style.strokeDashoffset = offset;
   } else {
     timerDisplay.textContent = "00:00:00";
     circle.style.strokeDashoffset = circumference;
     localStorage.removeItem("startTime");
     clearInterval(timer);
   }
 }
 
 // تحديث العداد كل ثانية
 updateTimer();
 const timer = setInterval(updateTimer, 1000);