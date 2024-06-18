
let quantity=document.getElementsByClassName('quantity');
for (let element of quantity) {
    element.addEventListener('change', updatetotals);
}
function updatetotals() {
    var priceElements = document.getElementsByClassName("price");
    var quantityElements = document.getElementsByClassName("quantity");
    var subtotalElements = document.getElementsByClassName("subtotal");
    var total=0;
    for (let i = 0; i < priceElements.length; i++) {
        let price = parseFloat(priceElements[i].innerText);
        var quantity = parseInt(quantityElements[i].value);
        var subtotal = price * quantity;
        total+=subtotal;
        subtotalElements[i].innerText = subtotal;
    }
    document.getElementById("cart-total").innerHTML=total;
    document.getElementById('cart-subtotal').innerText=total;
}

document.addEventListener("DOMContentLoaded", function() {
    let removeButtons = document.getElementsByClassName("remove");

    Array.from(removeButtons).forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const row = button.closest('tr');
            if (row) {
                row.remove();
                updatetotals();
            }
        });
    });
});

let coupon=document.getElementById('coupon');
coupon.addEventListener('change',applyCoupon);
function applyCoupon() {
    const couponInput = document.querySelector('#coupon input[type="text"]');
    const couponCode = couponInput.value.trim();
    if (couponCode == "patil") {
        const couponDiscount = 0.1;
        const subtotal = parseFloat(document.getElementById('cart-subtotal').innerText);
        const discountedSubtotal = subtotal - (subtotal * couponDiscount);
        document.getElementById('cart-subtotal').innerText = `${discountedSubtotal} Rs`;
        const total = discountedSubtotal;
        document.getElementById('cart-total').innerText = `${total} Rs`;
        couponInput.value = "";
    } else {
        alert("Please enter a valid coupon code.");
    }
}



