let cart = JSON.parse(localStorage.getItem("CART")) || []

const inputSearchCodeEl = document.querySelector("[data-testid='inputSearch']")
const inputSearchProductEl = document.querySelector(`[data-testid='inputSearchProduct']`)
const inputPaymentEl = document.querySelector(`[data-testid='inputPayment']`)
const inputRestPaymentEl = document.querySelector(`[data-testid='restPayment']`)

const tabletProductsEl = document.querySelector("[data-testid='tabletProducts']")
const tBodyProductsEl = document.querySelector("[data-testid='tBodyProducts']")

const btnRegisterEl = document.querySelector("[data-testid='btnRegister']")
const btnSearchEl = document.querySelector(`[data-testid='btnSearch']`)

const labelTotalEl = document.querySelector(`[data-testid='labelTotal']`)
const labelPaymentEl = document.querySelector(`[data-testid='labelPayment']`)

const centerContentEl = document.querySelector(`[data-testid='centerContent']`)
const badgeCartTotalEl = document.querySelector(`[data-testid='badgeCartTotal']`)

const modalInfoBodyEl = document.querySelector(`[data-testid='modalInfoBody']`)
const modalBodyProductEl = document.querySelector(`[data-testid='modalBodyProduct']`)

const modalPayment = new bootstrap.Modal(document.querySelector('#staticBackdrop'), { keyboard: true })
const modalInventory = new bootstrap.Modal(document.querySelector('#inventory'), { keyboard: true })
const modalLoading = new bootstrap.Modal(document.querySelector('#modalLoading'))

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.addEventListener('load', function () {
    if (cart.length > 0) {
        cart.forEach((item) => {
            renderProductOnTable(item)
        })
        badgeCartTotalEl.textContent = getTotalItems(cart)
        updateTotalToPay()
    } else {
        btnRegisterEl.setAttribute('disabled', true)
        badgeCartTotalEl.textContent = 0
    }
})

document.onkeydown = function (e) {
    if (e.altKey && e.code === "KeyL") {
        modalInventory.show()
        inputSearchProductEl.focus()
        return
    }

    if (e.altKey && e.code === "KeyC") {
        inputSearchCodeEl.focus()
        return
    }

    if (e.altKey && e.code === "KeyV") {
        btnRegisterEl.click()
        return
    }
}

inputPaymentEl.addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) // Add decimal places
        .replace('.', ',')           // Replace decimal point with comma
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add thousands separator

    e.target.value = value ? `${value}` : '';
});

inputSearchCodeEl.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
        let query = Number(e.target.value)

        let isValidCode = Number.isInteger(query)

        if (!isValidCode) {
            inputSearchCodeEl.value = ''
        } else {
            if (query === 0) {
                console.log('Venda AVULSA', query);
                //[TODO] Open modal with input to get the product name
                //[TODO] Add the value to the tablet

            } else {
                console.log('Buscar por produto: ', query);
                //[TODO] Get the product from the inventory
                //[TODO] Add the value to the tablet

            }
        }
        inputSearchCodeEl.value = ''
    }
});

function searchProducts() {
    modalInventory.show()
}

function renderProductsToSearchProductTable() {
}

function addProductOnTable() {
    let id = `${Date.now()}`

    const product = {
        id,
        code,
        name,
        price,
        amount: 1
    }

    const alreadyInCart = cart.some((item) => { return item.code === product.code })

    if (alreadyInCart) {
        modalInfoBodyEl.textContent = `${product.name}`
        modalInfo.show()
        inputSearchCodeEl.value = ''
        return
    }

    inputSearchCodeEl.value = ''

    addProductsToCart(product)
    renderProductOnTable(product)
    updateTotalToPay()
}

function renderProductOnTable(product) {
    tBodyProductsEl.innerHTML += `
        <tr data-testid='tr-${product.id}'>
            <th scope="row" class="text-center"><kbd>${product.code}</kbd></th>
            <td class="text-uppercase">${product.name}</td>
            <td class="text-center" data-testid="amount-${product.id}">${product.amount}</td>
            <td class="text-center">${numberToBrazilianReal(1 * product.price)}</td>
            <td data-testid="subtotal-${product.id}"></td>
            <td class="text-center">
                <button type="button" class="btn btn-outline-success btn-sm" onclick="updateProductAmount('plus', ${product.id})"><i class="fa-solid fa-plus"></i></button>
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-outline-danger btn-sm" onclick="updateProductAmount('minus', ${product.id})"><i class="fa-solid fa-minus"></i></button>
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-outline-secondary btn-sm" onclick="removeItemFromCart(${product.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `
}

function renderProductsOnModalTable() {
    modalBodyProductEl.innerHTML += `
        <tr>
            <th scope="row" class="text-center"><kbd>7896396109181</kbd></th>
            <td class="text-uppercase">Toalha de geladeira com 3 pçs ref 918</td>
            <td class="text-center">R$ 5,00</td>
            <td class="text-center">
                <button type="button" class="btn btn-outline-success btn-sm"><i
                        class="fa-solid fa-plus"></i></button>
            </td>
        </tr>
    `
}


function addProductsToCart(product) {
    cart.push(product)
    localStorage.setItem("CART", JSON.stringify([...cart]))
    badgeCartTotalEl.textContent = getTotalItems(cart)
}

function updateProductAmount(action, id) {
    cart = cart.map((item) => {
        let amount = item.amount

        if (item.id == id) {
            if (action == "minus" && amount > 1) {
                amount--
            } else if (action === "plus") {
                amount++
            }
        }

        return {
            ...item,
            amount,
        }
    })

    updateTotalToPay()
}

function updateTotalToPay() {
    cart.forEach(item => {
        let amountEl = document.querySelector(`[data-testid='amount-${item.id}']`)
        let subtotalEl = document.querySelector(`[data-testid='subtotal-${item.id}']`)

        amountEl.textContent = item.amount
        subtotalEl.textContent = numberToBrazilianReal(item.amount * item.price)
    })

    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);

    let totalToPay = Number(total).toFixed(2)

    labelTotalEl.textContent = `${totalToPay.replace('.', ',')}`

    inputPaymentEl.value = labelTotalEl.textContent
    localStorage.setItem("CART", JSON.stringify([...cart]));

    openAndCloseRegister()

}

function removeItemFromCart(id) {
    const rowEl = document.querySelector(`[data-testid='tr-${id}']`)
    rowEl.remove()

    cart = cart.filter((item) => item.id != id);
    badgeCartTotalEl.textContent = getTotalItems(cart)
    localStorage.setItem("CART", JSON.stringify([...cart]));

    updateTotalToPay()
    openAndCloseRegister()
}

function removeAllItemFromCart() {
    cart.forEach((item) => {
        let rowEl = document.querySelector(`[data-testid='tr-${item.id}']`)
        rowEl.remove()

    })

    cart = []
    badgeCartTotalEl.textContent = getTotalItems(cart)
    localStorage.setItem("CART", JSON.stringify([...cart]));

    updateTotalToPay()
    openAndCloseRegister()
}

function brazilianCurrencyToNumber(currency) {
    let cleanValue = currency.replace('R$', '').trim();
    cleanValue = cleanValue.replace(/\./g, '');
    cleanValue = cleanValue.replace(',', '.');
    return parseFloat(cleanValue);
}

function numberToBrazilianReal(number) {
    return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}


function handlePayment() {
    let totalToPay = cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    let amountPayed = brazilianCurrencyToNumber(inputPaymentEl.value)
    const paymentsMethods = []


    if (totalToPay.toFixed(2) == amountPayed) {
        labelPaymentEl.textContent = numberToBrazilianReal(amountPayed)
        inputRestPaymentEl.value = numberToBrazilianReal(amountPayed)

        // Add payment method to the array
        let radios = document.querySelectorAll('[data-testid*="radio"]')

        inputPaymentEl.value = numberToBrazilianReal(0)
        radios.forEach((radio) => {
            if (radio.checked) {
                paymentsMethods.push(radio.dataset.payment)
            }
        })

        // Close the modal and set disabled to Fechar btn
        modalPayment.hide()
        modalLoading.show()

    } else {

    }

    removeAllItemFromCart()
}

function openAndCloseRegister() {
    if (cart.length > 0) {
        btnRegisterEl.removeAttribute('disabled')
    } else {
        btnRegisterEl.setAttribute('disabled', true)
    }
}

function getTotalItems(cart) {
    return cart.reduce((total, item) => total + item.amount, 0);
}
