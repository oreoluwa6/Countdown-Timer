// Set the future date
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // Add 10 days
 // Update the end date paragraph
 document.getElementById("end-date").innerHTML = futureDate.toDateString();
 // Update the countdown every second
let countdownTimer = setInterval(updateCountdown, 1000);
function updateCountdown() {
  let now = new Date().getTime();
  let distance = futureDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//function updateCountdown() {
  //const targetDate = new Date("2024-03-07T00:00:00Z").getTime(); // Change the target date accordingly
  //const now = new Date().getTime();
  //const distance = targetDate - now;
 

 // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days ;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes ;
  document.getElementById("seconds").innerText = seconds ;
}

// if (distance < 0) {
//   document.getElementById("days").innerText = days + 10;
//   document.getElementById("hours").innerText = hours;
//   document.getElementById("minutes").innerText = minutes ;
//   document.getElementById("seconds").innerText = seconds ;
// }

updateCountdown();
setInterval(updateCountdown, 1000);