var MotivationArray = [
    { //1
        motivational: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        from: "Winston Churchill"
    },
    { //2
        motivational: "The moment you're ready to quit is usually the moment right before a miracle happens. Don't give up.",
        from: "Unknown"
    },
    { //3
        motivational: "Fall seven times, stand up eight.",
        from: "Japanese Proverb"
    },
    { //4
        motivational: "You are stronger than you think, braver than you believe, and smarter than you know.",
        from: " A.A. Milne (via Christopher Robin)"
    },
    { //5
        motivational: "When you feel like giving up, remember why you started.",
        from: "Unknown"
    },
    { //6
        motivational: "Our greatest glory is not in never falling, but in rising every time we fall.",
        from: "Confucius"
    },
    { //7
        motivational: "If you’re going through hell, keep going.",
        from: "Winston Churchill"
    },
    { //8
        motivational: "Hardships often prepare ordinary people for an extraordinary destiny.",
        from: "C.S. Lewis"
    },
    { //9
        motivational: "You don’t deserve sh*t until you earn it.",
        from: "Keith Maranan"
    },
    { //10
        motivational: "Sitting around dreaming gets you nowhere. Move.",
        from: "Keith Maranan"
    },
    { //11
        motivational: "Stop complaining. Start Coding.",
        from: "Keith Maranan"
    },
    { //12
        motivational: "If you can scroll for 2 hours, you can grind for 2 hours.",
        from: "Keith Maranan"
    },
    { //13
        motivational: "Nobody owes you anything. You want something? Earn it.",
        from: "Keith Maranan"
    },
    { //14
        motivational: "Comfort zones are where dreams go to die.",
        from: "Keith Maranan"
    },
    { //15
        motivational: "You haven’t earned a break. Stop pretending you're overworked.",
        from: "Keith Maranan"
    },
    { //16
        motivational: "Life’s not unfair. You’re just inconsistent.",
        from: "Keith Maranan"
    },
    { //17
        motivational: "Your future self is already disappointed in you. Fix it.",
        from: "Keith Maranan"
    },
    { //18
        motivational: "You want success? Then stop being soft.",
        from: "Keith Maranan"
    },
    { //19
        motivational: "You’re not stuck. You’re just scared to move.",
        from: "Keith Maranan"
    },
    { //20
        motivational: "Results don’t come from wishing. They come from working.",
        from: "Keith Maranan"
    },
];

function getRandomMotivation() {
    var number = Math.floor(Math.random() * (MotivationArray.length));
    return MotivationArray[number];

}

function HideButtonAfterClick(button) {
    button.style.display = "none";
    document.getElementById("newgen").style.display = "inline-block";
}

function RandomMotivation() {
    var MotivationA = getRandomMotivation();
    var motivationalText = document.getElementById("motivational");
    var fromText = document.getElementById("from");
    motivationalText.textContent = MotivationA.motivational;
    fromText.textContent = MotivationA.from;
}

document.getElementById("newgen").addEventListener("click", () => {
    RandomMotivation();
});