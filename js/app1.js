// const itemEl = window.item;  // элементы с id становятся свойствами глобального объекта (но так лучше не делать0
// console.log(itemEl);
const im1= 'https://im0-tub-ru.yandex.net/i?id=844dc629d8aa8584f2de091cd5f002a5-l&n=13';
const im2= 'https://im0-tub-ru.yandex.net/i?id=6b5203601a8a69d5f8894cdb32abd3ab-l&n=13';


const imageEl2 = document.createElement('img');
list = [];
list.push(im1,im2)



for (const im of list) {
    document.body.appendChild(drag(im));
}



let draggable = null;

function drag(img){
    const imageEl = document.createElement('img');
    imageEl.draggable = true;
    imageEl.src =  img;
    imageEl.width = '100';
    imageEl.height = '100';

imageEl.addEventListener('dragstart', (event) => {
    draggable = event.currentTarget;
});

imageEl.addEventListener('dragend', (event) => {
    draggable = null;
    console.log('dragend');
});
return imageEl;}

const moveAreaEl = document.querySelector('#move-area');
const copyAreaEl = document.querySelector('#copy-area');

moveAreaEl.addEventListener('dragenter', (event) => {
    console.log('dragenter');
});

moveAreaEl.addEventListener('dragexit', (event) => {
    console.log('dragexit');
    // TODO:
});

moveAreaEl.addEventListener('dragover', (event) => {
    event.preventDefault(); // чтобы можно было кидать
    event.dataTransfer.dropEffect = 'move';
    console.log('dragover');
});

moveAreaEl.addEventListener('dragleave', (event) => {
    console.log('dragleave');
});

moveAreaEl.addEventListener('drop', (event) => {
    event.preventDefault();
    console.log(event);
    const data = event.dataTransfer.getData('text/plain');
    console.log(data);
    console.log('drop');
    if (draggable !== null) {
        moveAreaEl.appendChild(draggable);
        localStorage.setItem('position', 'move');
    }
});



copyAreaEl.addEventListener('dragenter', (event) => {

    console.log('dragenter');
});

copyAreaEl.addEventListener('dragexit', (event) => {
    console.log('dragexit');
    // TODO:
});

copyAreaEl.addEventListener('dragover', (event) => {
    event.preventDefault(); // чтобы можно было кидать
    event.dataTransfer.dropEffect = 'copy';
    console.log('dragover');
});

copyAreaEl.addEventListener('dragleave', (event) => {
    console.log('dragleave');
});

copyAreaEl.addEventListener('drop', (event) => {
    event.preventDefault();
    console.log(event);
    const data = event.dataTransfer.getData('text/plain');
    console.log(data);
    console.log('drop');
    if (draggable !== null) {
        // copyAreaEl.appendChild(draggable.cloneNode(true));
        const clone = draggable.cloneNode(true);
        clone.textContent = Math.random();
        copyAreaEl.insertBefore(clone, event.currentTarget.firstElementChild);
    }
});







