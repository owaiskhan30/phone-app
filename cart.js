const get_data = localStorage.getItem("Cart Products");
const convert_data = JSON.parse(get_data);
console.log(convert_data);

const cartItem = document.querySelector(".cartItems");
const totalPrice = document.querySelector(".totalPrice");
const productQuanity = document.getElementsByClassName("increment");
const productCardPrice = document.getElementsByClassName("price");

console.log(productCardPrice);


convert_data.map((item, index) => {
    cartItem.innerHTML += `
        <div class="card" id="card_${item.id}">
            <h2>Brand: ${item.brand}</h2>
            <h2>Model: ${item.model}</h2>
            <h2>Storage: ${item.storage}</h2>
            <h2>Color: ${item.color}</h2>
            <h1 class="price">Price: ${item.price}</h1>
            <h2 class="quantityHead">Quantity: <span class="quantity"><button onclick="quantityIncrement('${index}')">+</button><span class="increment">${item.quantity}</span><button onclick="quantitydecrement('${index}')">-</button></span></h2>
        </div>`
});


function quantityIncrement(quantityIncrement) {
    let show = convert_data[quantityIncrement].quantity += 1;
    productQuanity[quantityIncrement].innerHTML = show;
    let productPrice = convert_data[quantityIncrement].price * show;
    productCardPrice[quantityIncrement].innerHTML = "Price: " + productPrice; 
}

function quantitydecrement(quantitydecrement) {
    let show = convert_data[quantitydecrement].quantity -= 1;
    if(show > 0) {
        productQuanity[quantitydecrement].innerHTML = show;
        let productPrice = convert_data[quantitydecrement].price * show;
        productCardPrice[quantitydecrement].innerHTML = "Price: " + productPrice;
    } else {
        let hello = localStorage.removeItem("Cart Products");
        cartItem.innerHTML = "";
        totalPrice.innerHTML = "";

        console.log(hello);
        
    }
} 

// function carttotalPrice(cartindex) {
//     let price = convert_data[cartindex].price;
//     totalPrice.innerHTML = price;

//     console.log(price);
    
// }

//carttotalPrice(0);