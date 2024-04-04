import { menuArray } from "./data.js" 

const container = document.getElementById("container")
const menu = document.getElementById("menu")
const yourOrder = document.getElementById("yourOrder")
const totalPrice = document.getElementById("totalPrice")
let productsArray = []
let total = 0
let btnCompleteOrder = document.getElementById("btn-complete-order")
let payBtn = document.getElementById("pay-btn")
let fullName = document.getElementById("fullName")

function getHtmlStrings(arr) {
    
    let htmlStrings = ""
    for(let menuItem of menuArray) {
        htmlStrings +=
         `
    <div class="parent">
        <div class="emojiHtml">
            <p>${menuItem.emoji}</p><br>
        </div>
    
        <div class="htmlClass">
            <h3>${menuItem.name}</h3>
            <p>${menuItem.ingredients}</p>
            <p><strong>$${menuItem.price}</strong></p>
        </div>
    
        <div class="btnClass">
            <button data-menuidbtn=${menuItem.id} name="butonProduse"> + </button>
        </div>
    </div>
      `
    }
    return htmlStrings  
}

function renderYourOrder() {
    yourOrder.innerHTML = ''
    productsArray.forEach(function(produs){
        const produsHtml = `
            <div class="shoppingCart">
                <h3 class="flex-small">${produs.name}</h3>
                <a href="#" class="flex-large" data-remove=${produs.id} name="removeBtn">remove</a>
                <h3 class="flex-small">$${produs.price}</h3>
            </div>
        `

        yourOrder.innerHTML += produsHtml
    })

    total = productsArray.reduce(function (accumulator, currentElement) {
                return accumulator + currentElement.price
            }, 0);     

    totalPrice.innerHTML = `Total: ${total.toFixed(2)}`
}
   
document.addEventListener("click", function(e){
    if(e.target.name === 'removeBtn') {
        const productId = e.target.dataset.remove;
        productsArray = productsArray.filter(product => product.id != productId)
        productsArray = productsArray.filter(product => product.id != productId)
        renderYourOrder()
    }
    
    if(e.target.tagName === "BUTTON" && e.target.name === 'butonProduse') {

        const finalResult = menuArray.filter(function(eachObject){
            return eachObject.id == e.target.dataset.menuidbtn
        })[0]
        productsArray.push(finalResult)
        renderYourOrder()
           
    }
            
})
    
menu.innerHTML = (getHtmlStrings(menuArray))
btnCompleteOrder.addEventListener("click", function(){
    form.style.display = "inline"
})

payBtn.addEventListener("click", function(){
    yourOrder.innerHTML = `Thank you, ${fullName.value}. Your order is on its way!`
    totalPrice.innerHTML = ''
    btnCompleteOrder.style.display = "none"
})


