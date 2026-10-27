// Находим три нужных элемента и кнопку сброса
const nameInput = document.querySelector("#visitor-name");
const joinButton = document.querySelector("#join-button");
const resetButton = document.querySelector("#reset-button");
const message = document.querySelector("#message");

const startMessage = "Здесь появится сообщение.";

function showMessage() {
  // Читаем поле внутри функции: при каждом нажатии берём свежий ввод
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Введите имя.";
    nameInput.focus();
    return;
  }

  if (name.length < 2) {
    message.textContent = "Имя слишком короткое: нужно минимум 2 символа.";
    nameInput.focus();
    return;
  }

  message.textContent = name + ", добро пожаловать в «Читальню»! Берите книгу с полки.";
}

function resetMessage() {
  nameInput.value = "";
  message.textContent = startMessage;
  nameInput.focus();
}

joinButton.addEventListener("click", showMessage);
resetButton.addEventListener("click", resetMessage);
