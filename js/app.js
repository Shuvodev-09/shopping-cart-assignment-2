
// Bracelet item start plus section
document.getElementById('bracelet-plus').addEventListener('click', () => {
    let braceletNumberInput = document.getElementById('bracelet-number');
    let braceletQuantity = parseInt(braceletNumberInput.value);

    let newQuantity = braceletQuantity + 1;
    braceletNumberInput.value = newQuantity;

    updateTotals('bracelet-number', 'bracelet-total', 499);
});

// Bracelet decrease
document.getElementById('bracelet-minus').addEventListener('click', () => {
    let braceletNumberInput = document.getElementById('bracelet-number');
    let braceletQuantity = parseInt(braceletNumberInput.value);

    // Quantity minimum 0
    if (braceletQuantity > 0) {
        let newQuantity = braceletQuantity - 1;
        braceletNumberInput.value = newQuantity;

        updateTotals('bracelet-number', 'bracelet-total', 499);
    }
});

// Sunglass item starts

// Sunglass increase
document.getElementById('sunglass-plus').addEventListener('click', () => {
    let sunglassNumberInput = document.getElementById('sunglass-number');
    let sunglassQuantity = parseInt(sunglassNumberInput.value);

    let newQuantity = sunglassQuantity + 1;
    sunglassNumberInput.value = newQuantity;

    updateTotals('sunglass-number', 'sunglass-total', 69);
});

// Sunglass decrease
document.getElementById('sunglass-minus').addEventListener('click', () => {
    let sunglassNumberInput = document.getElementById('sunglass-number');
    let sunglassQuantity = parseInt(sunglassNumberInput.value);

    // Quantity minimum 0
    if (sunglassQuantity > 0) {
        let newQuantity = sunglassQuantity - 1;
        sunglassNumberInput.value = newQuantity;

        updateTotals('sunglass-number', 'sunglass-total', 69);
    }
});

// Event listeners for manual input
document.getElementById('bracelet-number').addEventListener('input', () => {
    updateTotals('bracelet-number', 'bracelet-total', 499);
});

document.getElementById('sunglass-number').addEventListener('input', () => {
    updateTotals('sunglass-number', 'sunglass-total', 69);
});


// manualy it can be work

function updateTotals(inputId, totalId, itemPrice) {
    let numberInput = document.getElementById(inputId);
    let quantity = parseInt(numberInput.value);

    // Ensure quantity is not negative
    if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
        numberInput.value = 0;
    }

    // Calculate new total
    let total = document.getElementById(totalId);
    let newTotal = quantity * itemPrice;
    total.innerHTML = newTotal;

    calculateTotal();
}


// Function to calculate subtotal and total including tax
function calculateTotal() {
    let braceletTotal = parseInt(document.getElementById('bracelet-total').innerHTML) || 0;
    let sunglassTotal = parseInt(document.getElementById('sunglass-total').innerHTML) || 0;

    let subtotal = braceletTotal + sunglassTotal;
    let tax =  subtotal * 0.1;
    let total = subtotal + tax;

    document.getElementById('sub-total').innerHTML = subtotal.toFixed(2);
    document.getElementById('tax-ammount').innerHTML = tax.toFixed(2);
    document.getElementById('total-price').innerHTML = total.toFixed(2);
}

// Initial calculation
calculateTotal();
