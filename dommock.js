function changeHeading() {
    const button = document.getElementById('button');
    let heading = document.getElementById('heading');
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
};