const div = document.querySelector(".products");
const cat_Btns = document.querySelector(".cat_btn");
const btnArr = [];

let products = [
    { brand: 'Samsung', model: 'Galaxy S21', price: 799, storage: '128GB', color: 'Phantom Gray', image: 'images/Samsung.jpg' },
  { brand: 'Apple', model: 'iPhone 13', price: 999, storage: '128GB', color: 'Midnight', image: 'images/Apple.jpg' },
  { brand: 'OnePlus', model: '9 Pro', price: 969, storage: '256GB', color: 'Morning Mist', image: 'images/OnePlus.jpg' },
  { brand: 'Xiaomi', model: 'Mi 11', price: 749, storage: '128GB', color: 'Horizon Blue', image: 'images/Xiaomi.jpg' },
  { brand: 'Google', model: 'Pixel 6', price: 699, storage: '128GB', color: 'Sorta Seafoam', image: 'images/Google.jpg' },
  { brand: 'Sony', model: 'Xperia 5 III', price: 999, storage: '256GB', color: 'Black', image: 'images/Sony.jpg' },
  { brand: 'Oppo', model: 'Find X3 Pro', price: 1099, storage: '256GB', color: 'Gloss Black', image: 'images/Oppo.jpg' },
  { brand: 'Vivo', model: 'X60 Pro', price: 799, storage: '128GB', color: 'Shimmer Blue', image: 'images/Vivo.jpg' },
  { brand: 'Realme', model: 'GT Master Edition', price: 499, storage: '128GB', color: 'Luna White', image: 'images/Realme.jpg' },
  { brand: 'Motorola', model: 'Edge 20', price: 699, storage: '128GB', color: 'Frosted Gray', image: 'images/Motorola.jpg' },
  { brand: 'Asus', model: 'ROG Phone 5', price: 999, storage: '256GB', color: 'Phantom Black', image: 'images/Asus.jpg' },
  { brand: 'Nokia', model: '8.3 5G', price: 699, storage: '128GB', color: 'Polar Night', image: 'images/Nokia.jpg' },
  { brand: 'Huawei', model: 'P40 Pro', price: 899, storage: '256GB', color: 'Silver Frost', image: 'images/Huawei.jpg' },
  { brand: 'Lenovo', model: 'Legion Phone Duel', price: 999, storage: '256GB', color: 'Vengeance Red', image: 'images/Lenovo.jpg' },
  { brand: 'ZTE', model: 'Axon 30 Ultra', price: 749, storage: '128GB', color: 'Black', image: 'images/ZTE.jpg' },
  { brand: 'Samsung', model: 'Galaxy Z Fold3', price: 1799, storage: '256GB', color: 'Phantom Silver', image: 'images/Samsung-Galaxy-Z.jpg' },
  { brand: 'Apple', model: 'iPhone 12 Mini', price: 699, storage: '64GB', color: 'Blue', image: 'images/Apple-iPhone-12.jpg' },
  { brand: 'Xiaomi', model: 'Redmi Note 10 Pro', price: 299, storage: '128GB', color: 'Onyx Gray', image: 'images/Xiaomi-Redmi.jpg' },
  { brand: 'Google', model: 'Pixel 5a', price: 449, storage: '128GB', color: 'Mostly Black', image: 'images/Google-Pixel.jpeg' },
  { brand: 'Sony', model: 'Xperia 1 III', price: 1299, storage: '256GB', color: 'Frosted Black', image: 'images/Sony-Xperia.jpg' },
  { brand: 'Oppo', model: 'Reno6 Pro', price: 599, storage: '128GB', color: 'Aurora', image: 'images/Oppo-Reno6.jpg' },
  { brand: 'Vivo', model: 'Y72 5G', price: 399, storage: '128GB', color: 'Graphite Black', image: 'images/Vivo-Y72.jpg' },
  { brand: 'Realme', model: '8 Pro', price: 279, storage: '128GB', color: 'Infinite Blue', image: 'images/Realme-8.jpg' },
  { brand: 'Motorola', model: 'Moto G100', price: 599, storage: '128GB', color: 'Iridescent Ocean', image: 'images/Motorola-Moto.jpg' },
  { brand: 'Asus', model: 'Zenfone 8', price: 699, storage: '128GB', color: 'Obsidian Black', image: 'images/Asus-Zenfone.jpg' },
  { brand: 'Nokia', model: 'G50', price: 299, storage: '128GB', color: 'Midnight Sun', image: 'images/Nokia-G50.jpg' },
  { brand: 'Huawei', model: 'Nova 9', price: 549, storage: '128GB', color: 'Starry Blue', image: 'images/Huawei-Nova.jpg' },
  { brand: 'Lenovo', model: 'K12 Pro', price: 199, storage: '128GB', color: 'Electric Violet', image: 'images/Lenovo-K12.jpg' },
  { brand: 'ZTE', model: 'Blade V30', price: 229, storage: '128GB', color: 'Space Gray', image: 'images/ZTE-Blade.jpg' },
  { brand: 'Samsung', model: 'Galaxy A52s', price: 499, storage: '128GB', color: 'Awesome Black', image: 'images/Samsung-Galaxy-A52s.jpg' }
  ];

// Render Products.

const render = (result_category) => {
    div.innerHTML = "";
    result_category.map(function (item, index) {
        div.innerHTML += `
        <div class="card" id="card_${index}">
            <img src="${item.image}">
            <h2>Brand: ${item.brand}</h2>
            <h2>Model: ${item.model}</h2>
            <h2>Storage: ${item.storage}</h2>
            <h2>Color: ${item.color}</h2>
            <h1>Price: $${item.price}</h1>
            <button onclick="addtocart(${index})">Add To Cart</button>
        </div>`  
    });
}

render(products);


// Product Add To Cart.

let cart_product = [];



const get_data = JSON.parse(localStorage.getItem("Cart Products"));
if(get_data === null) {
    cart_product = [];
} else {
    cart_product = [...get_data];
}

console.log(cart_product);

function addtocart(add_product) {
    const productIndex = cart_product.findIndex(item => item.model === products[add_product].model);
    if (productIndex === -1) {
        products[add_product].quantity = 1;
        cart_product.push(products[add_product]);
    } else {
        cart_product[productIndex].quantity++;
    }
    console.log(cart_product);
    Swal.fire({
        title: products[add_product].brand + " " + products[add_product].model + " Added",
        text: "Product added to cart successfully!",
        icon: "success",
      });
}
localStorage.setItem("Cart Products", JSON.stringify(cart_product));


// Checkout And Save Data To Local Storage.

function Checkout() {
    if(!cart_product.length) {
        Swal.fire({
            title: "Product Not Selected",
            text: "Please Select The Product First",
            icon: "question"
          });
    } else {
        let saveData = JSON.stringify(cart_product);
        localStorage.setItem("Cart Products", saveData)
        window.location = "cart.html";
    }
}