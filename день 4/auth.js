// Публичные вымышленные данные только для демонстрации.
const demoLogin = "club";
const demoPassword = "web123";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const authMessage = document.querySelector("#auth-message");
const accountPanel = document.querySelector("#account-panel");
const accountTitle = document.querySelector("#account-title");
const accountGreeting = document.querySelector("#account-greeting");
const logoutButton = document.querySelector("#logout-button");

function handleLogin(event) {
  event.preventDefault();

  const login = loginInput.value.trim();
  const password = passwordInput.value;

  authMessage.textContent = "";

  if (login === "") {
    authMessage.textContent = "Введите логин.";
    loginInput.focus();
    return;
  }

  if (password === "") {
    authMessage.textContent = "Введите учебный пароль.";
    passwordInput.focus();
    return;
  }

  if (login === demoLogin && password === demoPassword) {
    accountGreeting.textContent = "Здравствуйте, " + login + "!";
    loginForm.reset();
    passwordInput.type = "password";
    loginForm.hidden = true;
    accountPanel.hidden = false;
    authMessage.textContent = "Учебный вход выполнен.";
    accountTitle.focus();
    return;
  }

  authMessage.textContent = "Неверный логин или пароль.";
  passwordInput.value = "";
  passwordInput.focus();
}

loginForm.addEventListener("submit", handleLogin);

function handleLogout() {
  accountPanel.hidden = true;
  loginForm.hidden = false;
  accountGreeting.textContent = "";
  loginForm.reset();
  passwordInput.type = "password";
  authMessage.textContent = "Вы вышли из учебного кабинета.";
  loginInput.focus();
}

logoutButton.addEventListener("click", handleLogout);

// Дополнительно: показ учебного пароля
const showPassword = document.querySelector("#show-password");

function togglePassword() {
  if (showPassword.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

showPassword.addEventListener("change", togglePassword);
