const button = document.getElementById('button');
const heading = document.getElementById('heading');

const listener = button.addEventListener("click", changeHeading);

function changeHeading(){
    if (heading.innerText == "BEFORE CLICK") {
        heading.innerText = "AFTER CLICK"
        heading.classList.remove("before-click")
        heading.classList.add("after-click")
    } else {
        heading.innerText = "BEFORE CLICK"
        heading.classList.remove("after-click")
        heading.classList.add("before-click")
    };
};

module.exports = {
    changeHeading,
    button,
    heading,
    listener
}