document.addEventListener("DOMContentLoaded", function () {
    const consoleDiv = document.getElementById("console");

    function fakeLog(message) {
        console.log("Executing log:", message); // لتأكد أنه يعمل
        const p = document.createElement("p");
        p.textContent = "> " + message;
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight; // تحريك التمرير للأسفل تلقائيًا
    }

    setTimeout(() => fakeLog("Initializing RTX COMMUNITY Hack Tool..."), 1000);
    setTimeout(() => fakeLog("Bypassing Discord security protocols..."), 2000);
    setTimeout(() => fakeLog("Connecting to: discord.gg/rtxtop1..."), 3000);
    setTimeout(() => fakeLog("Injecting Payload... [Python, C++]"), 4000);
    setTimeout(() => fakeLog("Extracting data... 100% Complete!"), 5000);
    setTimeout(() => fakeLog("Operation Successful. Joining RTX COMMUNITY."), 6000);
});
