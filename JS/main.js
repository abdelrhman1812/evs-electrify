
/* ====================== Change Background Nav =====================  */

function changeColor() {
    let navbar = document.querySelector(".navbar");
    let home = document.querySelectorAll(".home");
    let scroll = window.scrollY;
    if (scroll < 150) {
        navbar.classList.remove("bg-nav");
        for (let i = 0; i < home.length; i++) {
            home[i].classList.add("text-light");
        }



    } else {
        navbar.classList.add("bg-nav");
        for (let i = 0; i < home.length; i++) {
            home[i].classList.remove("text-light");
            home[i].classList.add("a-color-scroll");
        }
    }
}


window.addEventListener("scroll", changeColor);





/*-----------------------  Photo ---------------------*/
window.addEventListener("load", function () {

    const imgInfo = document.querySelector(".info");
    const imgHtml = document.querySelector(".imgHtml");
    const iClose = document.querySelector(".close");
    const iLeft = document.querySelector(".left");
    const iRight = document.querySelector(".right");

    const allImages = Array.from(document.querySelectorAll(".img"));
    let counter = 0;

    function showImage(index) {
        const src = allImages[index].getAttribute("src");
        imgHtml.style.backgroundImage = `url(${src})`;
    }

    function movePlus() {
        counter = (counter + 1) % allImages.length;
        showImage(counter);
    }

    function moveNegative() {
        counter = (counter - 1 + allImages.length) % allImages.length;
        showImage(counter);
    }

    function closeImageInfo() {
        imgInfo.classList.add("d-none");
    }

    // Attach event listeners
    allImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            imgInfo.classList.remove("d-none");
            counter = index;
            showImage(counter);
        });
    });

    iLeft.addEventListener("click", moveNegative);
    iRight.addEventListener("click", movePlus);
    iClose.addEventListener("click", closeImageInfo);

})


/* increment Number in section in home page */
let nums = document.querySelectorAll(".num")
console.log(nums)

let interval = 5000;

nums.forEach((num) => {

    let startValue = 0;
    let endValue = parseInt(num.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {

        startValue += 1;
        num.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)

})



/* ====================== Timer =====================  */


let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
console.log(sec);

const countDown = () => {
    const selectedTime = new Date("Dec 20, 2023");

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = selectedTime - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference < 0) {
            clearInterval(interval);
        } else {
            day.innerHTML = days;
            hour.innerHTML = hours;
            min.innerHTML = minutes;
            sec.innerHTML = seconds;
        }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
};

countDown()
