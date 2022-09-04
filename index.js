var sections = 1;
window.location.hash = "#section1";
document.addEventListener("wheel", (key) => {
    key.preventDefault()
    if (key.deltaY > 0) {
        if (sections < 4) {
            sections += 1;
        }
        setTimeout(function () {
            window.location.hash = "#section" + sections;
        }, 500);

    }
    if (key.deltaY < 0) {
        if (sections > 1) {
            sections -= 1;
        }
        setTimeout(function () {
            window.location.hash = "#section" + sections;
        }, 500);

    }
});

document.addEventListener("keydown", (key) =>{
    key.preventDefault()
    if (key.keyCode === 40) {
        if (sections < 4) {
            sections += 1;
        }
        window.location.hash = "#section" + sections;
    }
    if (key.keyCode === 38) {
        if (sections > 1) {
            sections -= 1;
        }
            window.location.hash = "#section" + sections;
    }
});

let insetAfter = document.getElementById("insertAfter");

setTimeout(function (){
    insetAfter.innerText = "I write code for fun. But it's time to write code for a living ;)"
}, 3000);

setTimeout(function (){
    insetAfter.innerText = "Here's a bit about me"
}, 8000);

setTimeout(function (){
    window.location.hash = "#section2"
    sections += 1;
}, 10000);


let theDot = document.getElementById("thedot");
theDot.addEventListener("click", () =>{
    let ul = document.querySelector("ul");
    ul.style.color = "whitesmoke";
    document.getElementById("hiddenDuck").hidden = false;
    document.getElementById("leaveMessage").hidden = false;
})