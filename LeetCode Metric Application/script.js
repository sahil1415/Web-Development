document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded, now executing scripts...");

    const userInput = document.getElementById("userInput");
    const searchButton = document.getElementById("searchButton");
    const statsContainer = document.querySelector(".statsContainer");
    const easyProgressCircle = document.querySelector(".easyProgress");
    const mediumProgressCircle = document.querySelector(".mediumProgress");
    const hardProgressCircle = document.querySelector(".hardProgress");
    const easyLabel = document.getElementById("easyLabel");
    const mediumLabel = document.getElementById("mediumLabel");
    const hardLabel = document.getElementById("hardLabel");

    const cardsContainer = document.querySelector(".statsCard");

    function validateUserName(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty!!!");
            return false;
        }
        const reg = /^(?!_)[a-zA-Z0-9_]{4,16}(?<!_)$/;
        if (reg.test(username)) {
            return true;
        }
        alert("Invalid username");
        return false;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        console.log(url);

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to retrieve data");
            }

            const data = await response.json(); // ✅ Fixed JSON parsing
            console.log("Logging Data", data);  // ✅ Corrected logging

            searchButton.textContent = "Search";
            searchButton.disabled = false;
            populateData(data);

        } catch (e) {
            console.error(e);
            statsContainer.innerHTML = `<p>No data found<p>`;
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }
    function updateProgress(solved, total, label, circle){
        const percentageSolved = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${percentageSolved}%`)
        label.textContent = `${solved}/${total}`
    }
    function populateData(data){
        const totalEasy = data.totalEasy;
        const totalMedium = data.totalMedium;
        const totalHard = data.totalHard;

        const easySolved = data.easySolved;
        const mediumSolved = data.mediumSolved;
        const hardSolved = data.hardSolved;

        updateProgress(easySolved, totalEasy, easyLabel, easyProgressCircle)
        updateProgress(mediumSolved, totalMedium, mediumLabel, mediumProgressCircle)
        updateProgress(hardSolved, totalHard, hardLabel, hardProgressCircle)


        // Dynamically creating html and css
        const submissionCalendar = data.submissionCalendar;
        const acceptanceRate = data.acceptanceRate;
        const ranking = data.ranking;
        const reputation = data.reputation;
        let total = 0;
        for(let key in submissionCalendar){
            total += submissionCalendar[key];
        }
        const cardDdata = [
            {label: "Overall Submission", value:total},
            {label: "Acceptance Rate", value:acceptanceRate},
            {label: "Ranking", value:ranking},
            {label: "Reputation", value:reputation},
        ];
        console.log("Card Data - ", cardDdata);

        // Populating the data

        cardsContainer.innerHTML = cardDdata.map(
            data =>{
                return `
                <div class ="card">
                <h3>${data.label}</h3>
                <p>${data.value}</p>
                </div>
                `
            }
        ).join("")

    }

    searchButton.addEventListener("click", function () {
        const username = userInput.value;
        console.log("Logging username - " + username);

        if (validateUserName(username)) {
            fetchUserDetails(username);
        }
    });
});
