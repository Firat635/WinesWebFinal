let menuHamburger = document.getElementById("menuHamburger")
let ul = document.querySelector("ul")
let burger =true


menuHamburger.addEventListener("click",burgerFunc)
function burgerFunc() {
    if (burger) {
        ul.classList.add("menu")
        
    } else {
        ul.classList.remove("menu")
    }
    burger=!burger
}


function getData() {
    products.innerHTML=""
    let cart= JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach((item,index)=>{
        if (item.count==undefined) {
           itemcount=1
        }
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>count:${item.count}</h6>
        <h6>${item.price}$</h6>
        <button onclick="removeToCart(${index})"><i class="fa-solid fa-trash mx-1"></i>Remove</button>
       
        `
        products.appendChild(div)
    })
    
}
getData()
function removeToCart(index) {
    let cart =JSON.parse(localStorage.getItem("cart")) || []
    let cartRmv=cart[index]
    if (cartRmv && cartRmv.count >1) {
        cartRmv.count--
    } else {
        cart.splice(index,1)
    }
    localStorage.setItem("cart",JSON.stringify(cart))
getData()
}