let products = document.getElementById("products")
let productsName=document.getElementById("productsName")
let productsimage=document.getElementById("productsimage")
let productsPrice=document.getElementById("productsPrice")
let form=document.getElementById("form")

form.addEventListener("submit",formFunc)
async function formFunc(e) {
    e.preventDefault()
   
    let data ={
        name:productsName.value,
        image:productsimage.value,
        price:productsPrice.value
    }
    await axios.post("https://655c3300ab37729791aa0bf5.mockapi.io/students/basket",data)
    .then(()=>{
        form.reset()
    })
    .catch((error)=>console.log(error))
}
async function getApi() {
    await axios.get(`https://655c3300ab37729791aa0bf5.mockapi.io/students/products`)
    .then((res)=>{
        db = res.data
        db.forEach((item)=>{
            let div = document.createElement("div")
            div.className="box"
            div.innerHTML=`
            <img src="${item.image}" alt="productsPhoto">
            <p>${item.title}</p>
            <h6>${item.price}$</h6>
            <button onclick="addToremove(${item.id})">Remove</button>
          
            `
            products.appendChild(div)
        })
    })
    .catch((error)=>console.log(error))
    page++
    
}
getApi()

let srcForm =document.getElementById("srcForm")
let inp = document.getElementById("inp")

srcForm.addEventListener("submit",srcformFunc)

async function srcformFunc(e) {

    e.preventDefault()
    products.innerHTML=""
    await axios.get("https://655c3300ab37729791aa0bf5.mockapi.io/students/products")
   .then((res)=>{
    db=res.data
    let src = db.filter((item)=>item.title.toLowerCase().includes(inp.value.toLowerCase()))
    src.forEach((item)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>${item.price}$</h6>
        <button onclick="addToremove(${item.id})">Remove</button>
      
        `
        products.appendChild(div)
    })
})

        
    
}
let max= document.getElementById("max")
let min= document.getElementById("min")
let abc= document.getElementById("abc")
let cba= document.getElementById("cba")
let dflt= document.getElementById("dflt")
cba.addEventListener("click",cbaFunc)

async function cbaFunc() {
    
   
    products.innerHTML=""
    await axios.get("https://655c3300ab37729791aa0bf5.mockapi.io/students/products")
   .then((res)=>{
    db=res.data
    let cba = db.sort((a,b)=>b.price.localeCompare(a.price))
cba.forEach((item)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>${item.price}$</h6>
        <button onclick="addToremove(${item.id})">Remove</button>
      
        `
        products.appendChild(div)
    })
})

        
    
}

abc.addEventListener("click",abcFunc)
async function abcFunc() {
    
   
    products.innerHTML=""
    await axios.get("https://655c3300ab37729791aa0bf5.mockapi.io/students/products")
   .then((res)=>{
    db=res.data
    let abc = db.sort((a,b)=>a.price.localeCompare(b.price))
abc.forEach((item)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>${item.price}$</h6>
        <button onclick="addToremove(${item.id})">Remove</button>
      
        `
        products.appendChild(div)
    })
})

        
    
}


dflt.addEventListener("click",getApi)

min.addEventListener("click",minFunc)
async function minFunc() {
    
   
    products.innerHTML=""
    await axios.get("https://655c3300ab37729791aa0bf5.mockapi.io/students/products")
   .then((res)=>{
    db=res.data
    let min = db.sort((a,b)=>a.price-b.price)
    min.forEach((item)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>${item.price}$</h6>
        <button onclick="addToremove(${item.id})">Remove</button>
      
        `
        products.appendChild(div)
    })
})

        
    
}



max.addEventListener("click",maxFunc)
async function maxFunc() {
    
   
    products.innerHTML=""
    await axios.get("https://655c3300ab37729791aa0bf5.mockapi.io/students/products")
   .then((res)=>{
    db=res.data
    let max = db.sort((a,b)=>b.price-a.price)
    max.forEach((item)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="productsPhoto">
        <p>${item.title}</p>
        <h6>${item.price}$</h6>
        <button onclick="addToremove(${item.id})">Remove</button>
      
        `
        products.appendChild(div)
    })
})

        
    
}