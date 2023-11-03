const toggleButton = document.getElementById("toggle-button")
const navbarLinks = document.getElementById("navbar")

toggleButton.addEventListener("click", () =>{
   navbarLinks.classList.toggle("active")
})
