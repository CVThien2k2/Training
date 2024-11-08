const btnStart = document.getElementById("btnStart");
const btnLogin = document.getElementById("btnLogin");

const usernameControlInput = document.getElementById("usernameControlInput");
const passwordControlInput = document.getElementById("passwordControlInput");

const inputOldPassword = document.getElementById("oldPasswordControlInput");
const inputNewPassword = document.getElementById("newPasswordControlInput");

const oldPasswordError = document.getElementById("oldPasswordError");
const newPasswordError = document.getElementById("newPasswordError");
const usernameError = document.getElementById("usernameError");
const passwdError = document.getElementById("passwdError");

const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const forgotModal = new bootstrap.Modal(document.getElementById("forgotModal"));
const alertSuccess = document.getElementById("alert");

let username = "admin";
let password = "admin";

const btnSave = document.getElementById("btnSave");

btnLogin.addEventListener("click", () => {
  if (!usernameControlInput.value) {
    usernameError.innerText = "Bắt buộc nhập";
    usernameControlInput.classList.add("is-invalid");
  } else if (usernameControlInput.value !== username) {
    usernameError.innerText = "Username không đúng";
    usernameControlInput.classList.add("is-invalid");
  } else {
    usernameControlInput.classList.remove("is-invalid");
  }
  if (!passwordControlInput.value) {
    passwdError.innerText = "Bắt buộc nhập";
    passwordControlInput.classList.add("is-invalid");
  } else if (passwordControlInput.value !== password) {
    passwdError.innerText = "Password không đúng";
    passwordControlInput.classList.add("is-invalid");
  } else {
    passwordControlInput.classList.remove("is-invalid");
  }
  if (
    usernameControlInput.value === username &&
    passwordControlInput.value === password
  ) {
    loginModal.hide();
    btnStart.innerText = "Đăng nhập thành công";
    alertSuccess.innerText = "Đăng nhập thành công !";
    alertSuccess.classList.add("show");
    setTimeout(() => {
      alertSuccess.classList.remove("show");
    }, 2000);
    btnStart.removeEventListener("click", arguments.callee);
  }
});

btnSave.addEventListener("click", () => {
  if (!inputOldPassword.value) {
    oldPasswordError.innerText = "Bắt buộc nhập";
    inputOldPassword.classList.add("is-invalid");
  } else if (inputOldPassword.value !== password) {
    oldPasswordError.innerText = "Password không đúng";
    inputOldPassword.classList.add("is-invalid");
  } else {
    inputOldPassword.classList.remove("is-invalid");
  }
  if (!inputNewPassword.value) {
    newPasswordError.textContent = "Bắt buộc nhập";
    inputNewPassword.classList.add("is-invalid");
  } else if (inputNewPassword.value === inputOldPassword.value) {
    newPasswordError.textContent = "Mật khẩu mới không được trùng mật khẩu cũ";
    inputNewPassword.classList.add("is-invalid");
  } else {
    inputNewPassword.classList.remove("is-invalid");
  }
  if (
    inputOldPassword.value === password &&
    inputNewPassword.value !== inputOldPassword.value
  ) {
    password = inputNewPassword.value;
    forgotModal.hide();
    loginModal.show();
    alertSuccess.classList.add("show");
    setTimeout(() => {
      alertSuccess.classList.remove("show");
    }, 2000);
  }
});

inputOldPassword.addEventListener("blur", () => {
  if (!inputOldPassword.value) {
    oldPasswordError.innerText = "Bắt buộc nhập";
    inputOldPassword.classList.add("is-invalid");
  } else {
    inputOldPassword.classList.remove("is-invalid");
  }
});
inputNewPassword.addEventListener("blur", () => {
  if (!inputNewPassword.value) {
    newPasswordError.textContent = "Bắt buộc nhập";
    inputNewPassword.classList.add("is-invalid");
  } else {
    inputNewPassword.classList.remove("is-invalid");
  }
});
