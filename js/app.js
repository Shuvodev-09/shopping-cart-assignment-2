// Bracelet item start plus section
document.getElementById('bracelet-plus').addEventListener('click', () => {
    let braceletNumberInput = document.getElementById('bracelet-number');
    let braceletQuantity = parseInt(braceletNumberInput.value);

    let newQuantity = braceletQuantity + 1;
    braceletNumberInput.value = newQuantity;

    // Current total price
    let braceletTotal = document.getElementById('bracelet-total');
    let currentBraceletTotal = parseInt(braceletTotal.innerHTML);

    let newBraceletTotal = currentBraceletTotal + 499;
    braceletTotal.innerHTML = newBraceletTotal;

    calculateTotal();
});

// Bracelet decrease
document.getElementById('bracelet-minus').addEventListener('click', () => {
    let braceletNumberInput = document.getElementById('bracelet-number');
    let braceletQuantity = parseInt(braceletNumberInput.value);

    // Quantity minimum 0
    if (braceletQuantity > 0) {
        let newQuantity = braceletQuantity - 1;
        braceletNumberInput.value = newQuantity;

        // Get the current total price
        let braceletTotal = document.getElementById('bracelet-total');
        let currentBraceletTotal = parseInt(braceletTotal.innerHTML);

        let newBraceletTotal = currentBraceletTotal - 499;
        braceletTotal.innerHTML = newBraceletTotal;

        calculateTotal();
    }
});

// Sunglass item starts

// Sunglass increase
document.getElementById('sunglass-plus').addEventListener('click', () => {
    let sunglassNumberInput = document.getElementById('sunglass-number');
    let sunglassQuantity = parseInt(sunglassNumberInput.value);

    let newQuantity = sunglassQuantity + 1;
    sunglassNumberInput.value = newQuantity;

    // Current total price
    let sunglassTotal = document.getElementById('sunglass-total');
    let currentSunglassTotal = parseInt(sunglassTotal.innerHTML);

    let newSunglassTotal = currentSunglassTotal + 69;
    sunglassTotal.innerHTML = newSunglassTotal;

    calculateTotal();
});

// Sunglass decrease
document.getElementById('sunglass-minus').addEventListener('click', () => {
    let sunglassNumberInput = document.getElementById('sunglass-number');
    let sunglassQuantity = parseInt(sunglassNumberInput.value);

    // Quantity minimum 0
    if (sunglassQuantity > 0) {
        let newQuantity = sunglassQuantity - 1;
        sunglassNumberInput.value = newQuantity;

        // Current total price
        let sunglassTotal = document.getElementById('sunglass-total');
        let currentSunglassTotal = parseInt(sunglassTotal.innerHTML);

        let newSunglassTotal = currentSunglassTotal - 69;
        sunglassTotal.innerHTML = newSunglassTotal;

        calculateTotal();
    }
});

// Function to calculate subtotal and total including tax
function calculateTotal() {
    let braceletTotal = parseInt(document.getElementById('bracelet-total').innerHTML);
    let sunglassTotal = parseInt(document.getElementById('sunglass-total').innerHTML);

    let subtotal = braceletTotal + sunglassTotal;
    let tax =  subtotal * 0.1;
    let total = subtotal + tax;

    //  all totals are zero when quantity is zero
    if (braceletTotal === 0 && sunglassTotal === 0) {
        subtotal = 0;
        tax = 0;
        total = 0;
    }

    document.getElementById('sub-total').innerHTML = subtotal.toFixed(2);
    document.getElementById('tax-ammount').innerHTML = tax.toFixed(2);
    document.getElementById('total-price').innerHTML = total.toFixed(2);
}

// Initial calculation
calculateTotal();







