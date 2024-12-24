document.addEventListener("DOMContentLoaded", ()=>{

    // array of objects for products
    const products = [
        {id: 1, name : "Product 1" , price: 29.99},
        {id: 2, name : "Product 2" , price: 49.00},
        {id: 3, name : "Product 3" , price: 69.00}
    ];

    const cart = []; // for saving cart items

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product =>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product') 
        
        productDiv.innerHTML= `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id ="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e)=>{
        const productId = parseInt(e.target.getAttribute("data-id")); // this is the  unique id data id of the div's
        const product = products.find(p => p.id === productId) // finding untill true
        
        addToCart(product);
        
    });

    function addToCart(product){
        cart.push(product); // adding carts to a array
        renderCart();
    }

    function renderCart(){
        // remove your cart is empty msg
         cartItems.innerHTML = "";
         let totalPrice = 0;

         if(cart.length > 0){
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((item, index)=>{
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = ` ${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItem);

                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
                
            })
         }else{
            emptyCartMessage.classList.remove('hidden');
            totalPriceDisplay.textContent = `$0.00`;
         }
    }

    checkOutBtn.addEventListener("click", ()=>{
                   
        cart.length = 0;
        alert("thankyou for shoping with us");
        renderCart();
    })
})