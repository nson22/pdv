const products = [
    {
        code: "7896396109181",
        name: "Toalha de geladeira com 3 pçs ref 918",
        price: "5.50",
        stock: 2
    },
    {
        code: "7896396106159",
        name: "CORTINA DE BOX POLIETILENO ESTAMPADA",
        price: "8.50",
        stock: 5
    },
    {
        code: "7896396106158",
        name: "Acendedor fogão",
        price: "9",
        stock: 3
    },
    {
        code: "",
        name: "Fervedor Polido 1,7L  LonguiLar",
        price: "16.62",
        stock: 1
    },
]

let cart = []
const searchEl = document.querySelector("[data-testid='inputSearch']")
const tabletProductsEl = document.querySelector("[data-testid='tabletProducts']")
const datalistProductsEl = document.querySelector("[data-testid='datalistProducts']")
const tBodyProductsEl = document.querySelector("[data-testid='tBodyProducts']")
const btnRegisterEl = document.querySelector("[data-testid='btnRegister']")
const labelTotalEl = document.querySelector(`[data-testid='labelTotal']`)


function renderProductsToDatalist() {
    products.forEach((product) => {
        if (!product.code) {
            product.code = `AVULSO (${Date.now()})`
        }

        datalistProductsEl.innerHTML += `
            <option value="${product.code} - ${product.name} - ${product.price} - ${product.stock}"></option>
        `
    })
}

function renderProductOnTable() {
    if (!searchEl.value) {
        alert(`Busque um produto`)
        return
    }

    const [code, name, price, stock] = searchEl.value.split(" - ")

    const product = {
        id: `${Date.now()}`,
        code,
        name,
        price,
        stock,
        amount: 1
    }

    const alreadyInCart = cart.some((item) => { return item.code === product.code })

    if (alreadyInCart) {
        alert(`${product.name} já adicionado carrinho`)
        searchEl.value = ''
        return
    }

    tBodyProductsEl.innerHTML += `
        <tr data-testid='tr-${product.id}'>
            <td class="col-1 text-center"><code>${product.id}</code></td>
            <td class="col-2"><code>${product.code}</code></td>
            <td class="col-3"><label data-testid='name-${product.id}'>${product.name}</label></td>
            <td class="col-2">
                <div class="input-group">
                    <button onclick="updateProductAmount('minus', ${product.id})" class="btn btn-danger" type="button"'><i class="fa-solid fa-minus"></i></button>
                    <input type="text" data-testid='amount-${product.id}' value="${product.amount}" disabled class="text-center w-50 bg-outline-secondary" >
                    <button onclick="updateProductAmount('plus', ${product.id})" class="btn btn-success" type="button"><i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td class="col-1"><input required data-testid="price-${product.id}" value="${product.price}" class="w-75" /></td>
            <td class="col-1"><input required data-testid='subtotal-${product.id}' disabled placeholder="R$" /></td>
            <td class="col-1 text-center"><button onclick='removeItemFromCart(${product.id})' class="btn btn-outline-danger" type="button" data-testid="btnRemove-${product.id}"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `
    searchEl.value = ''

    addProductsToCart(product)

}

function addProductsToCart(product) {
    cart.push(product)
    updateTotalToPay(product.id)
}

function updateProductAmount(action, id) {
    cart = cart.map((item) => {
        let amount = item.amount

        if (item.id == id) {
            if (action === 'minus' && amount > 1) {
                amount--
            } else if (action === 'plus' && amount < item.stock) {
                amount++
            }
        }

        return {
            ...item,
            amount
        }
    })

    updateTotalToPay(id)

}

function updateTotalToPay(id) {
    let amountEl = document.querySelector(`[data-testid='amount-${id}']`)
    let subtotalEl = document.querySelector(`[data-testid='subtotal-${id}']`)

    cart.filter((item) => {
        if (item.id == id) {
            amountEl.value = item.amount
            subtotalEl.value = `R$ ${Number(item.amount * item.price).toFixed(2)}`
        }
    })

    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    labelTotalEl.textContent = `R$ ${Number(total).toFixed(2)}`
}

function removeItemFromCart(id) {
    cart = cart.filter((item) => {
        item.id !== id
    })

    const rowEl = document.querySelector(`[data-testid='tr-${id}']`)
    labelTotalEl.textContent = `R$ 0,00`
    rowEl.remove()
}


renderProductsToDatalist()
