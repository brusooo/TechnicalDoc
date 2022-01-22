let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

function menuToggle() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    let container = document.querySelector(".container");
    container.classList.toggle("active");

    let box = document.querySelector(".box");
    box.classList.toggle("active");

    let themeBox = document.querySelector(".themeBox");
    themeBox.classList.toggle("menuTheme");
}

function toggleTheme(el) {
    let iconName = el.querySelector("ion-icon").getAttribute("name");
    if (iconName === "sunny") {
        el.querySelector("ion-icon").setAttribute("name", "moon");
    }
    else {
        el.querySelector("ion-icon").setAttribute("name", "sunny");
    }

    let body = document.body;
    body.classList.toggle("active");
}