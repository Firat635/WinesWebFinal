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
    let wish= JSON.parse(localStorage.getItem("wish")) || []
    wish.forEach((item,index)=>{
       
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
      
        <h6>${item.price}$</h6>
        <button onclick="removeToWish(${index})"><i class="fa-solid fa-trash mx-1"></i>Remove</button>
       
        `
        products.appendChild(div)
    })
    
}
getData()
function removeToWish(index) {
    let wish =JSON.parse(localStorage.getItem("wish")) || []
   
   
        wish.splice(index,1)
    
    localStorage.setItem("wish",JSON.stringify(wish))
getData()
}