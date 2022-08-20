const area = document.getElementById('area');
const contentWrapper = document.getElementById('content');
const modalWrapper = document.getElementById('modal-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
let move = 0;
let resault = '';

area.addEventListener('click', e => {
    if(e.target.className == 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        check();
    } 
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            resault = 'Крестики';
            prepareResault(resault);
        } else if (
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            resault = 'Нолики';
            prepareResault(resault);
        } else if (
            move == 9
        ) {
            resault = 'Ничья';
            prepareResaultNothing(resault);
    }}
}

const prepareResault = winner => {
    contentWrapper.innerHTML = `Победили ${winner}!`
    modalWrapper.style.display = 'block';
}

const prepareResaultNothing = nothing => {
    contentWrapper.innerHTML = `${nothing}!`
    modalWrapper.style.display = 'block';
}

const closeModal = () => {
    modalWrapper.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);