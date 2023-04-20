document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { id: 1, src: 'https://i.postimg.cc/0zPTRBrY/pokemon24.png' },
        { id: 1, src: 'https://i.postimg.cc/0zPTRBrY/pokemon24.png' },
        { id: 2, src: 'https://i.postimg.cc/wtBn3RX3/pokemon23.jpg' },
        { id: 2, src: 'https://i.postimg.cc/wtBn3RX3/pokemon23.jpg' },
        { id: 3, src: 'https://i.postimg.cc/mtQvnsZZ/pokemon22.jpg' },
        { id: 3, src: 'https://i.postimg.cc/mtQvnsZZ/pokemon22.jpg' },
        { id: 4, src: 'https://i.postimg.cc/56dcp0Vk/pokemon21.png' },
        { id: 4, src: 'https://i.postimg.cc/56dcp0Vk/pokemon21.png' },
        { id: 5, src: 'https://i.postimg.cc/rDjv8Ntv/pokemon20.jpg' },
        { id: 5, src: 'https://i.postimg.cc/rDjv8Ntv/pokemon20.jpg' },
        { id: 6, src: 'https://i.postimg.cc/t7VQh6Lx/pokemon19.png' },
        { id: 6, src: 'https://i.postimg.cc/t7VQh6Lx/pokemon19.png' },
        { id: 7, src: 'https://i.postimg.cc/TLFzz2W1/pokemon18.jpg' },
        { id: 7, src: 'https://i.postimg.cc/TLFzz2W1/pokemon18.jpg' },
        { id: 8, src: 'https://i.postimg.cc/TLLSJ8H6/pokemon17.png' },
        { id: 8, src: 'https://i.postimg.cc/TLLSJ8H6/pokemon17.png' },
        { id: 9, src: 'https://i.postimg.cc/9RD3gw0s/pokemon16.jpg' },
        { id: 9, src: 'https://i.postimg.cc/9RD3gw0s/pokemon16.jpg' },
        { id: 10, src: 'https://i.postimg.cc/Z97tLxbr/pokemon15.jpg' },
        { id: 10, src: 'https://i.postimg.cc/Z97tLxbr/pokemon15.jpg' },
        { id: 11, src: 'https://i.postimg.cc/yJYC9bH1/pokemon14.png' },
        { id: 11, src: 'https://i.postimg.cc/yJYC9bH1/pokemon14.png' },
        { id: 12, src: 'https://i.postimg.cc/mPSGPGKp/pokemon13.png' },
        { id: 12, src: 'https://i.postimg.cc/mPSGPGKp/pokemon13.png' },
        { id: 13, src: 'https://i.postimg.cc/18SQRz7N/pokemon12.jpg' },
        { id: 13, src: 'https://i.postimg.cc/18SQRz7N/pokemon12.jpg' },
        { id: 14, src: 'https://i.postimg.cc/LgPc2dzT/pokemon11.jpg'},
        { id: 14, src: 'https://i.postimg.cc/LgPc2dzT/pokemon11.jpg'},
        { id: 15, src: 'https://i.postimg.cc/YhY7wFRH/pokemon10.png' },
        { id: 15, src: 'https://i.postimg.cc/YhY7wFRH/pokemon10.png' },
    ];

  let shuffledCards = shuffleArray(cards);
  let firstCard = null;
  let secondCard = null;
  let canFlip = true;

  function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.id = card.id;

    const cardFront = document.createElement('img');
    cardFront.src = card.src;
    cardFront.classList.add('front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('back');

    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);

    cardElement.addEventListener('click', () => {
      if (!canFlip) return;
      if (cardElement.classList.contains('flipped')) return;

      cardElement.classList.add('flipped');

      if (!firstCard) {
        firstCard = cardElement;
      } else {
        secondCard = cardElement;

        if (firstCard.dataset.id === secondCard.dataset.id) {
          setTimeout(() => {
            firstCard.remove();
            secondCard.remove();

            firstCard = null;
            secondCard = null;
          }, 1000);
        } else {
          canFlip = false;
          setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            firstCard = null;
            secondCard = null;
            canFlip = true;
          }, 1000);
        }
      }
    });

    return cardElement;
  }

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function initializeGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    shuffledCards.forEach((card) => {
      const cardElement = createCard(card);
      gameBoard.appendChild(cardElement);
    });
  }

  initializeGame();
});
