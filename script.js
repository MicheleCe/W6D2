let hide = document.querySelector('.classJs')
let container = document.querySelector('.containerJs')
let hide1 = document.querySelector('.classJs1')
let container1 = document.querySelector('.containerJs1')

hide.onclick = function () {
    if (container.style.display === "none") {
        container.style.display = "";
    } else {
        container.style.display = "none";
    }
}

hide1.onclick = function () {
    if (container1.style.display === "none") {
        container1.style.display = "";
    } else {
        container1.style.display = "none";
    }
}