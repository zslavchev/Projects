const date = function () {
    let time = new Date().getFullYear();
    return time;
}

document.querySelector(".footer-year").innerHTML = `© Copyright ${date()} TinDog`;

