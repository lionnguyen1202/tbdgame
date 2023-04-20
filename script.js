document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { id: 1, src: 'https://i.postimg.cc/0zPTRBrY/pokemon24.png' },
        { id: 2, src: 'https://i.postimg.cc/wtBn3RX3/pokemon23.jpg' },
        { id: 3, src: 'https://i.postimg.cc/mtQvnsZZ/pokemon22.jpg' },
        { id: 4, src: 'https://i.postimg.cc/56dcp0Vk/pokemon21.png' },
        { id: 5, src: 'https://i.postimg.cc/rDjv8Ntv/pokemon20.jpg' },
        { id: 6, src: 'https://i.postimg.cc/t7VQh6Lx/pokemon19.png' },
        { id: 7, src: 'https://i.postimg.cc/TLFzz2W1/pokemon18.jpg' },
        { id: 8, src: 'https://i.postimg.cc/TLLSJ8H6/pokemon17.png' },
        { id: 9, src: 'https://i.postimg.cc/9RD3gw0s/pokemon16.jpg' },
        { id: 10, src: 'https://i.postimg.cc/Z97tLxbr/pokemon15.jpg' },
        { id: 11, src: 'https://i.postimg.cc/yJYC9bH1/pokemon14.png' },
        { id: 12, src: 'https://i.postimg.cc/mPSGPGKp/pokemon13.png' },
        { id: 13, src: 'https://i.postimg.cc/18SQRz7N/pokemon12.jpg' },
        { id: 14, src: 'https://i.postimg.cc/LgPc2dzT/pokemon11.jpg' },
        { id: 15, src: 'https://i.postimg.cc/YhY7wFRH/pokemon10.png' },

        // Thêm đường dẫn đến các hình ảnh khác của bạn
    ];

    let doubledCards = cards.concat(cards);
    doubledCards.sort(() => 0.5 - Math.random());

    const memoryGame = document.querySelector('.memory-game');

    doubledCards.forEach(card => {
        const memoryCard = document.createElement('div');
        memoryCard.classList.add('memory-card');
        memoryCard.dataset.id = card.id;

        const frontImage = document.createElement('img');
        frontImage.src = card.src;
        frontImage.style.transform = 'rotateY(180deg)';

        memoryCard.appendChild(frontImage);
        memoryGame.appendChild(memoryCard);
    });

    let flippedCards = [];
    memoryGame.addEventListener('click', (event) => {
        const memoryCard = event.target.closest('.memory-card');

        if (!memoryCard || memoryCard.classList.contains('flip')) return;

        memoryCard.classList.add('flip');
        flippedCards.push(memoryCard);

        if (flippedCards.length === 2) {
            setTimeout(() => {
                if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
flippedCards.forEach(card => card.classList.add('matched'));
} else {
flippedCards.forEach(card => card.classList.remove('flip'));
}
flippedCards = [];
}, 1000);
}
});
});