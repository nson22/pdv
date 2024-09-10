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
        code: "7896396106159",
        name: "Acendedor fogão",
        price: "9",
    },
    {
        code: "",
        name: "Fervedor Polido 1,7L  LonguiLar",
        price: "16.62",
    },
]

const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
const formatNumber = new Intl.NumberFormat('pt-BR', options)
const searchEl = document.querySelector("#search")
const totalEl = document.querySelector("#total")


document.querySelector("#payment").addEventListener("blur", (el) => {
    el.target.value = formatNumber.format(Number(el.target.value))
})

function addProductsToDatalist() {
    const datalistElement = document.querySelector("#products")


    products.forEach((product) => {
        if (!product.code) {
            product.code = "AVULSO"
        }
        datalistElement.innerHTML += `
            <option value="${product.code} - ${product.name} - ${product.price}"></option>
        `
    })
}

function addProductToTable(code, name, price) {
    const trEl = document.querySelectorAll("tr")
    const tableElement = document.querySelector("#product-table")

    tableElement.innerHTML += `
    <tr>
        <th scope="row">${trEl.length}</th>
        <th><kbd>${code}</kbd></th>
        <td><label>${name}</label></td>
        <td><input onchange="subTotal(${price}, ${trEl.length})" id='qty-${trEl.length}' type="number" min="1" value='1'></td>
        <td><input required id="price" value="${price}" />
        <td><input required id='subtotal-${trEl.length}' data-subtotal disabled placeholder="R$" />
    </tr>
    `

    searchEl.value = ''
}

function subTotal(price, el) {
    const qtyEl = document.querySelector(`#qty-${el}`).value
    const subtotalEl = document.querySelector(`#subtotal-${el}`)
    let subtotal = Number(qtyEl) * price
    subtotalEl.setAttribute("value", subtotal)
    totalToPay(subtotal)
}

function add() {
    if (!searchEl.value) {
        return
    }

    const [code, name, price] = searchEl.value.split(" - ")
    addProductToTable(code, name, price)

}

function totalToPay() {
    const totalEl = document.querySelector("#total")
    const allSubEl = document.querySelectorAll("input[data-subtotal]")
    const allSubs = []

    allSubEl.forEach(item => {
        allSubs.push(item.value)
    })

    const total = allSubs.reduce((accumulator, currentValue) => {
        console.log(accumulator, currentValue);

        return accumulator + currentValue;
    });

    console.log(allSubs);


    totalEl.textContent = formatNumber.format(Number(total))

}


addProductsToDatalist()