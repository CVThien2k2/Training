const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");

btnLogin.addEventListener("click", () => {
    modal.style.display = "flex";
    overlay.style.display = "block";
});
btnClose.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
})