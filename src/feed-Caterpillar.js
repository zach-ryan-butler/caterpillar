function feedCaterpillar(mockCaterpillar, fruitName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(fruitName);

    mockCaterpillar.appendChild(span);
}

export default feedCaterpillar;


