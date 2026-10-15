const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");
const year = document.getElementById("year");

menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("show");
});

year.textContent = new Date().getFullYear();