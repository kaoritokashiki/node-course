const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Phidelalphia'
}
console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const tarnsaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}

tarnsaction('order', product)