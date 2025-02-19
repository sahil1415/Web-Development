document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const dateInput = document.getElementById("timeanddate");

    if (!submitButton || !dateInput) {
        console.error("Elements not found! Make sure IDs match in HTML.");
        return;
    }

    submitButton.addEventListener("click", function () {
        const selectedDateTime = dateInput.value;

        if (!selectedDateTime) {
            alert("Please enter a valid date and time");
            return;
        }

        const endDate = new Date(selectedDateTime).getTime();
        const startDate = new Date().getTime();

        let x = setInterval(function updateTimer() {
            const now = new Date().getTime();
            const distancePending = endDate - now;

            // Calculating days, hours, minutes, and seconds
            const dInMilis = 24 * 60 * 60 * 1000;
            const hInMilis = 60 * 60 * 1000;
            const mInMilis = 60 * 1000;
            const sInMilis = 1000;
            const days = Math.floor(distancePending / dInMilis);
            const hours = Math.floor((distancePending % dInMilis) / hInMilis);
            const minutes = Math.floor((distancePending % hInMilis) / mInMilis);
            const seconds = Math.floor((distancePending % mInMilis) / sInMilis);

            // Populate in UI
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // Progress Bar Update
            const totalDistance = endDate - startDate;
            const distanceCovered = totalDistance - distancePending;
            const completedPercentage = (distanceCovered / totalDistance) * 100;
            let pBar = document.getElementById("progressBar");
            pBar.style.width = Math.min(completedPercentage, 100) + "%";

            // If time is up
            if (distancePending < 0) {
                clearInterval(x);
                document.getElementById("countDown").innerHTML = "Time's Up";
                pBar.style.width = "100%";
            }
        }, 1000);
    });
});
