const freeTime = 5 * 60;
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const breakminus = document.querySelector("#Nbm");
const breakplus = document.querySelector("#Nbp");
const timer = document.querySelector("#timer");
const sessionvalue = document.querySelector("#value");
const sessionplus = document.querySelector("#bp");
const sessionminus = document.querySelector("#bm");
const breakvalue = document.querySelector("#Nvalue");
let timerId=null;

let dummytimer=sessionvalue.textContent * 60;


// Function to start the timer
const startTimer = (time) => {
            reset.style.backgroundColor = "#ffa500"; // Set reset button color to #ffa500
            start.textContent = "Stop";
            start.style.backgroundColor = "red";
            timerId = setInterval(() => {
                let minutes = Math.floor(time / 60).toString().padStart(2, "0");
                let seconds = (time % 60).toString().padStart(2, "0");
                timer.textContent = `${minutes}:${seconds}`;
                if (time <= 0) {
                    clearInterval(timerId);
                    stopTimer(); // Handle stop behavior
                    reset.style.backgroundColor = "#694e0a"; // Change reset button color to #694e0a
                    dummytimer=parseInt(breakvalue.textContent)*60;
                }
                time--;
            }, 1000);
        };

        // Function to stop the timer
        const stopTimer = () => {
            clearInterval(timerId);
            start.textContent = "Start";
            start.style.backgroundColor = "green";

        };

        // Event listener for the Start button
        start.addEventListener("click", () => {
            if (start.textContent === "Start") {
                startTimer(dummytimer); // Start the timer with session length
            } else {
                    stopTimer(); // Stop the timer if it's running
                    const [minutes, seconds] = timer.textContent.split(":").map(Number);
                    dummytimer =minutes * 60 + seconds;
                    reset.style.backgroundColor = "#694e0a";


            }
        });

        // Event listener for the Session Plus button
        sessionplus.addEventListener("click", () => {
            sessionvalue.textContent = parseInt(sessionvalue.textContent) + 1;
        });

        // Event listener for the Session Minus button
        sessionminus.addEventListener("click", () => {
            if (parseInt(sessionvalue.textContent) > 0) {
                sessionvalue.textContent = parseInt(sessionvalue.textContent) - 1;
            }
        });

        // Event listener for the Reset button
        reset.addEventListener("click", () => {
            stopTimer(); // Stop the timer if it's running
            timer.textContent = sessionvalue.textContent+":"+"00"; // Reset timer display to initial value
            reset.style.backgroundColor = "#694e0a"; // Reset reset button color
            dummytimer=sessionvalue.textContent*60;
        });

        // Event listener for the Nbp (Break Plus) button
        breakplus.addEventListener("click", () => {
            breakvalue.textContent = parseInt(breakvalue.textContent) + 1;
        });

        // Event listener for the Nbm (Break Minus) button
        breakminus.addEventListener("click", () => {
            if (parseInt(breakvalue.textContent) > 0) {
                breakvalue.textContent = parseInt(breakvalue.textContent) - 1;
            }
        });
