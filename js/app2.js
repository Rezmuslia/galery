let draggable = null;

Array.from(document.querySelectorAll('li[draggable=true]'))
    .forEach(el => {
        el.addEventListener('dragstart', event => {
            draggable = event.currentTarget;
            event.dataTransfer.setData('text/plain', 'moved');
        });

        el.addEventListener('dragend', event => {
            draggable = null;
        });

        // <- до - тот, кого таскают, после - тот, на кого "пытаются кинуть"

        el.addEventListener('dragenter', event => {
           event.currentTarget.classList.add('insert-after');
        });

        el.addEventListener('dragleave', event => {
            event.currentTarget.classList.remove('insert-after');
        });

        el.addEventListener('dragover', event => {
            event.preventDefault();
        });

        el.addEventListener('drop', event => {
            // parent, oldChild, newChild
            event.preventDefault();
            const parent = event.currentTarget.parentElement;
            const oldChild = event.currentTarget.nextElementSibling;
            const newChild = draggable;
            parent.insertBefore(newChild, oldChild);
            event.currentTarget.classList.remove('insert-after');
        });
    });
