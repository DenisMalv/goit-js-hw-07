const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(input)
console.log(text)
console.log(`Стартовое значение ${input.value = 20} px`)
input.addEventListener(
    'input',
    getSizeText => (
        text.style.fontSize = `${getSizeText.currentTarget.value}px`,
        console.log(getSizeText.currentTarget.value)),
);
