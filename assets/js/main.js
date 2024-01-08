const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
e.preventDefault()

const blockID = anchor.getAttribute('href').substr(1)

document.getElementById(blockID).scrollIntoView({
behavior: 'smooth',
block: 'start'
})
})
}


function scrollTo(to, duration = 700) {
const
element = document.scrollingElement || document.documentElement,
start = element.scrollTop,
change = to - start,
startDate = +new Date(),
easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
},
animateScroll = function () {
    const currentDate = +new Date();
    const currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
    if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
    }
    else {
        element.scrollTop = to;
    }
};
animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
let btn = document.querySelector('#toTop');
window.addEventListener('scroll', function () {
if (pageYOffset > 100) {
    btn.classList.add('show');
} else {
    btn.classList.remove('show');
}
});

btn.onclick = function (click) {
click.preventDefault();
scrollTo(0, 400);
}
});

var Localization=function(n){var t=n.split(",");this.CL="ru";this.CL=(navigator.language||navigator.userLanguage).slice(0,2);this.Changed=new Event("changed");this.SelectLanguage=function(n){var r,i,u;try{r=document.getElementById("loc");r!=null&&r.remove();i=document.createElement("style");i.id="loc";u=n+"{display:inline-block;}";t.forEach(function(t){t!=n&&(u+=t+",")});i.innerHTML=u.slice(0,-1)+"{display:none !important;}";document.head.appendChild(i);this.CL=n;localStorage.lang=n;document.dispatchEvent(this.Changed)}catch(f){this.SelectLanguage(t[0])}};localStorage.lang==null?this.SelectLanguage(this.CL):this.SelectLanguage(localStorage.lang)};
var loc = new Localization("en,ru");
document.getElementById("ls").value = loc.CL;