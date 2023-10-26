const numberSpan = document.querySelector('.span');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('subtract')){
        numberSpan.innerHTML--;
    } if (ev.target.classList.contains('add')){
        numberSpan.innerHTML++;
    } if (ev.target.classList.contains('reset')){
        numberSpan.innerHTML = 0;
    }
    setColor();
})

const setColor = () => {
    if (numberSpan.innerHTML > 0){
        numberSpan.style.color = '#9fd3c7';
    } else if (numberSpan.innerHTML < 0){
        numberSpan.style.color = '#9fd3c7';
    } else {
        numberSpan.style.color = '#385170';
    }
}



// const numberSpan = document.querySelector('.span');
// const subtract = document.querySelector('.subtract');
// const reset = document.querySelector('.reset');
// const add = document.querySelector('.add');


// subtract.addEventListener('click', () => {
//     numberSpan.innerHTML--;
// });

// add.addEventListener('click', () => {
//     numberSpan.innerHTML++;
// });

// reset.addEventListener('click', () => {
//     numberSpan.innerHTML = 0;
// });


