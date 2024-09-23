const inputElement = document.querySelector('input');
const lowerCaseParagraph = document.querySelector('.lower-case');
const upperCaseParagraph = document.querySelector('.upper-case');
const camelCaseParagraph = document.querySelector('.camel-case');
const pascalCaseParagraph = document.querySelector('.pascal-case');
const snakeCaseParagraph = document.querySelector('.snake-case');
const kababCaseParagraph = document.querySelector('.kabab-case');
const trimParagraph = document.querySelector('.trim');

inputElement.addEventListener('keyup',()=> transformText())
function transformText(){
    const inputValue = inputElement.value;

    lowerCaseParagraph.textContent = inputValue.toLowerCase();
    upperCaseParagraph.textContent = inputValue.toUpperCase();
    camelCaseParagraph.textContent = inputValue
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
        .join('');
    
    pascalCaseParagraph.textContent = inputValue
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
        .join('');
    snakeCaseParagraph.textContent = inputValue
        .split(' ')
        .join('_')
        .toLocaleLowerCase();
    kababCaseParagraph.textContent = inputValue
        .split(' ')
        .join('-')
        .toLocaleLowerCase();
    trimParagraph.textContent = inputValue.trim();
};


window.addEventListener('load', () => {
    inputElement.value = "this is a normal sentence to transform"
    transformText();
})
