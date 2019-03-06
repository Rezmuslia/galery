// const itemEl = window.item;  // элементы с id становятся свойствами глобального объекта (но так лучше не делать0
// console.log(itemEl);

const imageEl = document.createElement('div');
imageEl.id = 'image';
imageEl.draggable = true;


imageEl.src = 'https://im0-tub-ru.yandex.net/i?id=844dc629d8aa8584f2de091cd5f002a5-l&n=13';
let draggable = null;

//imageEl.addEventListener('dragstart', (event) => {
   // event.dataTransfer.setDragImage('https://im0-tub-ru.yandex.net/i?id=844dc629d8aa8584f2de091cd5f002a5-l&n=13','1', '2');
    //draggable = event.currentTarget;
    //console.log('dragstart');

//itemEl.addEventListener('dragend', (event) => {
//    draggable = null;
//    console.log('dragend');
//});

const moveAreaEl = document.querySelector('#move-area');
const copyAreaEl = document.querySelector('#copy-area');

if (localStorage.getItem('position') === 'move') {
    moveAreaEl.appendChild(imageEl);
} else {
    document.body.appendChild(imageEl);
}

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
