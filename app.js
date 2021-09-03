console.log("Up and running...");
const toggleButton = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active-toggle");
});
