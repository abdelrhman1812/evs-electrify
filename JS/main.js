
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



/* ----------- */

let scroll_fixed = document.querySelector(".scroll-fixed")
console.log(scroll_fixed)

window.addEventListener('scroll', () => {

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    // console.log(document.documentElement.scrollHeight)
    // console.log(height)


    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop)
    scroll_fixed.style.width = `${(scrollTop / height) * 100}%`


})

/*-----------------------  Photo ---------------------*/
window.addEventListener("load", function () {
    let listImage = Array.from(document.querySelectorAll('.items img'));
    let overLay = document.querySelector('.over-lay-photo ')
    let closeIcon = document.getElementById('close')
    let srcImgChange = document.querySelector('.over-lay-photo img')
    let leftIcons = document.getElementById('left')
    let rightIcons = document.getElementById('right')
    let count = 0
    for (let i = 0; i < listImage.length; i++) {

        listImage[i].addEventListener('click', (e) => {
            let srcImage = e.target.getAttribute('src')

            count = listImage.indexOf(e.target)
            overLay.style.zIndex = "1";
            overLay.style.opacity = "1";
            srcImgChange.setAttribute('src', `${srcImage}`)


        });
    }

    leftIcons.addEventListener('click', function () {
        count--
        if (count < 0) {
            count = listImage.length - 1
        }
        let imgSrc = listImage[count].getAttribute('src')
        srcImgChange.setAttribute('src', `${imgSrc}`)



    })


    rightIcons.addEventListener('click', function () {
        count++
        if (count == listImage.length) {
            count = 0
        }

        let imgSrc = listImage[count].getAttribute('src')
        srcImgChange.setAttribute('src', `${imgSrc}`)


    })

    closeIcon.addEventListener('click', function () {
        overLay.style.zIndex = "-1";

        overLay.style.opacity = "0";
    })
})


/* ---------- Countr ---------- */
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
