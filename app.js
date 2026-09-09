function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(500, 2);

console.log("Order total:", total);

module.exports = calculateTotal;