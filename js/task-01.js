const category = document.querySelector('#categories').childElementCount
const allli = document.querySelectorAll('#categories .item')
console.log(`В списке ${category} категории`)
document.querySelectorAll('#categories .item').forEach(item => {
    item.querySelectorAll('h2').forEach(name => console.log(`Категория: ${name.textContent}`)),
        console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});


// // const allh2 = document.querySelector('h2')
// const allulli = document.querySelectorAll('ul>li').length
// console.log(`Category: ${category}`)
// console.log(allli)
// // console.log(allh2)
// console.log(`Количество элементов:${allulli}`)
// console.log(category)
// console.log(allli)

