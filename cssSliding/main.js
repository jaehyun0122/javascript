let mainText = document.querySelector("h1");
let subText = document.querySelector("h2");

window.addEventListener("scroll", () => {
    let value = window.scrollY
    // console.log("scrollY : ", value);
    if (value > 250) {
        mainText.style.animation = "backText 1s ease-out forwards";
        subText.style.animation = "backText 1s ease-out forwards";
    } else {
        mainText.style.animation = `slide 1s ease-out`;
        subText.style.animation = `slide 1s ease-out`;
    }
})