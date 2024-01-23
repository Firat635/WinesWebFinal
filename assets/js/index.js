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
let products = document.getElementById("products")
let loadMore = document.getElementById("loadMore")
let page =1
let limit =3 

loadMore.addEventListener("click",getApi)
async function getApi() {
    await axios.get(`https://655c3300ab37729791aa0bf5.mockapi.io/students/products?page=${page}&limit=${limit}`)
    .then((res)=>{
        db = res.data
        db.forEach((item)=>{
            let div = document.createElement("div")
            div.className="box"
            div.innerHTML=`
            <img src="${item.image}" alt="productsPhoto">
            <p>${item.title}</p>
            <h6>${item.price}$</h6>
            <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-arrow-down mx-1"></i>Add To Cart</button>
            <button class="wish" onclick="addToWish(${item.id})"><i class="fa-solid fa-heart mx-1"></i></button>
            `
            products.appendChild(div)
        })
    })
    .catch((error)=>console.log(error))
    page++
    
}
getApi()

function addToWish(id) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    let wishItem = wish.find((item)=>item.id==id)
    if (wishItem) {
        alert("Məhsul artıq var!")
        
    } else {
        wish.push(db.find((item)=>item.id==id))
        localStorage.setItem("wish",JSON.stringify(wish))
    }
    
}

function addToCart(id) {
    let cart =JSON.parse(localStorage.getItem("cart")) || []
    let cartItem = cart.find((item)=>item.id==id)
    if (cartItem) {
        cartItem.count=(cartItem.count || 1)+1
        
    } else {
        cart.push(db.find((item)=>item.id==id))
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}