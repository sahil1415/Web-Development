const endDate = new Date("20 Feb, 2025 00:35:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // calculating days, min, hrs and sec
    const dInMilis = 24 * 60 * 60 * 1000;
    const hInMilis = 60 * 60 * 1000;
    const mInMilis = 60 * 1000;
    const sInMilis = 1000;
    const days = Math.floor(distancePending / dInMilis);
    const hours = Math.floor((distancePending % dInMilis) / hInMilis);
    const minutes = Math.floor((distancePending % hInMilis) / mInMilis);
    const seconds = Math.floor((distancePending % mInMilis) / sInMilis);

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    const totalDistance = endDate - startDate;
    const completedPercentage = (distanceCovered / totalDistance) * 100;

    let pBar = document.getElementById("progressBar");
    pBar.style.width = Math.min(completedPercentage, 100) + "%";  // Ensure the progress bar doesn't exceed 100%

    if (distancePending < 0) {
        // Update text for countdown expiry
        clearInterval(x);  // Stopping the set interval funvction
        document.getElementById("countDown").innerHTML = "Time's Up";
        // Set progress bar to 100%
        pBar.style.width = "100%";
        return; // Stop the countdown once expired
    }
  
}, 1000);
