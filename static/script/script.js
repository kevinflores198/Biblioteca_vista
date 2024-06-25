// aside
const iconomenu = document.querySelector('#fa-solid');
const menu = document.querySelector('#container-items');
const header = document.querySelector("header");
const arrowUp = document.querySelector("#up");

//aside
iconomenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
});

//nav bar
window.addEventListener("scroll", function () {
    header.classList.toggle("scrollDown", window.scrollY > 0);
});

//buttonUp
window.addEventListener("scroll", () =>{
    const scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        arrowUp.style.right = 20 + "px";
    }else{
        arrowUp.style.right = -100 + "px";
    }
})