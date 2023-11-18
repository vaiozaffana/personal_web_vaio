import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#hobbies", {
    strings: ["Programming", "Music", "Exercise"],
    typeSpeed:100,
    loop: true,
})

const newConfettiButton = document.getElementById("confettiButton");
newConfettiButton.addEventListener("click", () => {
    const myConfettiBtn = document.createElement("canvas");
    myConfettiBtn.style.position = "fixed";
    myConfettiBtn.style.inset = 0;
    myConfettiBtn.style.width = "100vw";
    myConfettiBtn.style.height = "100vh";
    myConfettiBtn.style.zIndex = -1;
    document.body.appendChild(myConfettiBtn);
    
    const myConfettiButton = confetti.create(myConfettiBtn, {
    resize: true,
    useWorker: true,
});
myConfettiButton({
    particleCount:100,
    spread:160,
})
})







