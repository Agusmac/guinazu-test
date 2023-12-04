// menuToggle.js

let isTransactionOpen = false;
let isTypeOpen = false;
let isDormsOpen = false;

function toggleTransaction() {
    const menu = document.getElementById('transaction-selector');
    isTransactionOpen = !isTransactionOpen;

    if (isTransactionOpen) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
function toggleType() {
    const menu = document.getElementById('type-selector');
    isTypeOpen = !isTypeOpen;

    if (isTypeOpen) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
function toggleDorms() {
    const menu = document.getElementById('dorms-selector');
    isDormsOpen = !isDormsOpen;

    if (isDormsOpen) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}