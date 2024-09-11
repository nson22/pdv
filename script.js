
const products = [
    {
        code: "7896396109181",
        name: "Toalha de geladeira com 3 pçs ref 918",
        price: "5.50",
    },
    {
        code: "7896396106159",
        name: "CORTINA DE BOX POLIETILENO ESTAMPADA",
        price: "8.50",
    },
    {
        code: "7896396106158",
        name: "Acendedor fogão",
        price: "9",
    },
    {
        code: "",
        name: "Fervedor Polido 1,7L  LonguiLar",
        price: "16.62",
    },
]

let cart = JSON.parse(localStorage.getItem("CART")) || []

const searchEl = document.querySelector("[data-testid='inputSearch']")
const tabletProductsEl = document.querySelector("[data-testid='tabletProducts']")
const datalistProductsEl = document.querySelector("[data-testid='datalistProducts']")
const tBodyProductsEl = document.querySelector("[data-testid='tBodyProducts']")
const btnRegisterEl = document.querySelector("[data-testid='btnRegister']")
const btnAddEl = document.querySelector("[data-testid='btnAdd']")
const labelTotalEl = document.querySelector(`[data-testid='labelTotal']`)
const inputPaymentEl = document.querySelector(`[data-testid='inputPayment']`)
const labelPaymentEl = document.querySelector(`[data-testid='labelPayment']`)
const restPaymentEl = document.querySelector(`[data-testid='restPayment']`)
const modalInfoBodyEl = document.querySelector(`[data-testid='modalInfoBody']`)
const centerContentEl = document.querySelector(`[data-testid='centerContent']`)

const modalPayment = new bootstrap.Modal(document.querySelector('#staticBackdrop'))
const modalInfo = new bootstrap.Modal(document.querySelector('#modalInfo'))
const modalLoading = new bootstrap.Modal(document.querySelector('#modalLoading'))

window.addEventListener('load', function () {
    if (cart.length > 0) {
        cart.forEach((item) => {
            renderProductOnTable(item)
        })
        updateTotalToPay()
    } else {
        btnAddEl.setAttribute('disabled', true)
        btnRegisterEl.setAttribute('disabled', true)
    }

})

inputPaymentEl.addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) // Add decimal places
        .replace('.', ',')           // Replace decimal point with comma
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add thousands separator

    e.target.value = value ? `${value}` : '';
});

searchEl.addEventListener('input', function (e) {
    btnAddEl.removeAttribute('disabled')
});

function renderProductsToDatalist() {
    products.forEach((product) => {
        if (!product.code) {
            product.code = `AVULSO`
        }

        datalistProductsEl.innerHTML += `
            <option class="text-uppercase" value="${product.code} - ${product.name} - ${product.price}"></option>
        `
    })
}

function addProductOnTable() {
    let id = `${Date.now()}`
    let [code, name, price] = searchEl.value.split(" - ")

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
        btnAddEl.setAttribute('disabled', true)
        searchEl.value = ''
        return
    }

    addProductsToCart(product)
    renderProductOnTable(product)
    updateTotalToPay()
    searchEl.value = ''
    btnAddEl.setAttribute('disabled', true)
}

function renderProductOnTable(product) {
    tBodyProductsEl.innerHTML += `
    <tr data-testid='tr-${product.id}'>
        <th scope="row" class="text-center"><kbd style="font-size: 1rem; padding: 0.25rem 1rem 0.25rem 1rem">${product.code}</kbd></th>
        <td class="text-uppercase">${product.name}</td>
        <td class="text-center" data-testid="amount-${product.id}">${product.amount}</td>
        <td class="text-center">${numberToBrazilianReal(1 * product.price)}</td>
        <td data-testid="subtotal-${product.id}"></td>
        <td>
            <div class="text-success text-center" role="button"
                onclick="updateProductAmount('plus', ${product.id})">
                <i class="fa-solid fa-plus"></i>
            </div>
        </td>
        <td>
            <div class="text-danger text-center" role="button"
                onclick="updateProductAmount('minus', ${product.id})">
                <i class="fa-solid fa-minus"></i>
            </div>
        </td>
        <td>
            <div class="text-danger text-center" role="button"
                onclick="removeItemFromCart(${product.id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </td>
    </tr>
    `
}

function addProductsToCart(product) {
    cart.push(product)
    localStorage.setItem("CART", JSON.stringify([...cart]))
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
    updateTotalToPay()
    localStorage.setItem("CART", JSON.stringify([...cart]));
    openAndCloseRegister()
}

function removeAllItemFromCart() {
    cart.forEach((item) => {
        let rowEl = document.querySelector(`[data-testid='tr-${item.id}']`)
        rowEl.remove()

    })

    cart = []
    updateTotalToPay()
    localStorage.setItem("CART", JSON.stringify([...cart]));
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
        inputPaymentEl.value = numberToBrazilianReal(0)
        restPaymentEl.value = numberToBrazilianReal(amountPayed)
        // Add payment method to the array
        let radios = document.querySelectorAll('[data-testid*="radio"]')

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


renderProductsToDatalist()
