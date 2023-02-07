const iconBurger = document.querySelector('.burger'),
    leftItem = document.querySelector('.left-item'),
    closeBtn = document.querySelector('.close');

iconBurger.addEventListener('click', (e) => {
    leftItem.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    leftItem.style.display = 'none';
});

