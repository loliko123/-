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

// ---------- День 3: карточки из данных ----------
const topics = [
  {
    title: "Роман месяца",
    description: "Одна книга на четыре недели и большая встреча в конце.",
    category: "books"
  },
  {
    title: "Нон-фикшн",
    description: "Научно-популярные книги и честный спор с автором.",
    category: "books"
  },
  {
    title: "Чтение вслух",
    description: "Отрывки звучат иначе, чем на странице. Проверим вместе.",
    category: "meetings"
  },
  {
    title: "Читательские вечера",
    description: "Раз в месяц собираемся без плана и обсуждаем всё, что успели прочитать.",
    category: "meetings"
  }
];

const topicList = document.querySelector("#topic-list");
const topicCount = document.querySelector("#topic-count");

// Строит одну карточку из одного объекта
function addCard(topic) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = topic.title;

  const description = document.createElement("p");
  description.textContent = topic.description;

  card.append(title, description);
  topicList.append(card);
}

const categoryFilter = document.querySelector("#category-filter");

// Очищает список и строит карточки выбранной категории
function renderTopics() {
  topicList.replaceChildren();

  const selectedCategory = categoryFilter.value;
  let shown = 0;

  for (const topic of topics) {
    if (selectedCategory === "all" ||
        topic.category === selectedCategory) {
      addCard(topic);
      shown = shown + 1;
    }
  }

  topicCount.textContent = "Тем на странице: " + shown;

  if (shown === 0) {
    topicCount.textContent = "Тем пока нет.";
  }
}

categoryFilter.addEventListener("change", renderTopics);

renderTopics();
