// Элементы
const gameBoard = document.getElementById('game-board');

// Карточки (цифры пар)
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
let shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);

// Состояние игры
let flippedCards = [];
let matchedCards = 0;

// Создаем карточки
shuffledCards.forEach((number) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<div class="card-content">${number}</div>`;
  card.addEventListener('click', () => flipCard(card, number));
  gameBoard.appendChild(card);
});

// Функция переворота карточки
function flipCard(card, number) {
  if (card.classList.contains('flipped') || flippedCards.length === 2) return;
  
  card.classList.add('flipped');
  flippedCards.push({ card, number });

  if (flippedCards.length === 2) checkMatch();
}

// Проверка совпадений
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.number === card2.number) {
    matchedCards += 2;
    flippedCards = [];
    if (matchedCards === shuffledCards.length) {
      setTimeout(() => alert('Вы выиграли!'), 300);
    }
  } else {
    setTimeout(() => {
      card1.card.classList.remove('flipped');
      card2.card.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}
