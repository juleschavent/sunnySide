// DECLARATION VARIABLE
const burger = document.querySelector('#burger');
const burgerLinks = document.querySelector('.burger__links');
const header = document.querySelector('.header__placeHolder');

let isActive = true;

// FUNCTION
burger.addEventListener('click', function () {

    // console.log('click');
    if (isActive) {
        burgerLinks.classList.add('show');
        burgerLinks.classList.remove('hide');
        isActive = false;

        console.log(isActive);

    } else if (isActive == false) {
        burgerLinks.classList.remove('show');
        burgerLinks.classList.add('hide');
        isActive = true;

        console.log(isActive);
    };

});

header.addEventListener('click', function () {
    burgerLinks.classList.remove('show');
    burgerLinks.classList.add('hide');
    isActive = true;
    console.log("click header")
});