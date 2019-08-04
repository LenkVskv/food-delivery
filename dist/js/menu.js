document.addEventListener('DOMContentLoaded', function(){
  onDocumentReady();
  
});
var orders = [];

function onDocumentReady(){
  addButtonListeners();
  categories();
  filter();
  filterCuisine();
 order();
 submit();

//  showValue();

	
}
function addButtonListeners(){
  let generalQty = document.querySelectorAll(".red-info")[0];
  let sum = document.querySelectorAll(".red-info")[1];
  generalQty.textContent = 0;
  sum.textContent = 0;
  document.querySelectorAll(".product-box__item").forEach(elem => {
    elem.querySelector(".product-box__btn").addEventListener("click",()=>{
      let price = parseInt(elem.querySelector("p").textContent);
      let qty = elem.querySelector(".qty__item").value;
      let name = elem.querySelector(".product-box__title").textContent;
      orders.push({
        price: price,
        qty : qty,
        name : name
      })
      localStorage.setItem("orders",JSON.stringify(orders));
      generalQty.textContent = +qty + +generalQty.textContent;
      sum.textContent = price*qty + +sum.textContent;
    });
  });
}
function categories(){
  let categorySelect = document.querySelectorAll(".select-control")[0];
  let priceSelect = document.querySelectorAll(".select-control")[1];
  let cuisineSelect = document.querySelectorAll(".select-control")[2];
  
  cuisineSelect.addEventListener("change",() =>{
    filterCuisine(cuisineSelect.value,priceSelect.value);
  })

  categorySelect.addEventListener("change",() =>{
    filter(categorySelect.value,priceSelect.value);
  })
  
  priceSelect.addEventListener("change", () => {
    filter(categorySelect.value,priceSelect.value);
  })
  
}
function filter(categoryValue, priceValue){
  let elems = document.querySelectorAll(".product-box__item");
  elems.forEach(elem =>{
    elem.style.display = 'flex';
  });
  switch(categoryValue){
    case '0':
      elems.forEach(elem =>{
          elem.style.display = 'flex';
      })
    break;
    case '1':
      elems.forEach(elem =>{
        if(!elem.classList.contains('breakfast')){
          elem.style.display = 'none';
        }else{
          elem.style.display = 'flex';
        }
      })
    break;
    case '2':
      elems.forEach(elem =>{
        if(!elem.classList.contains('first_course')){
          elem.style.display = 'none';
        }else{
          elem.style.display = 'flex';
        }
      })
    break;
    case '3':
    elems.forEach(elem =>{
      if(!elem.classList.contains('garnish')){
        elem.style.display = 'none';
      }else{
        elem.style.display = 'flex';
      }
    })
    break;
  }
  elems.forEach(elem =>{
    priceValue = +priceValue;
    if(priceValue > 0){
      let price = parseInt(elem.querySelector('p').textContent);
      if(price > priceValue){
        elem.style.display = 'none';
      }
    }
  })
}

function filterCuisine(categoryValue, priceValue){
  let elems = document.querySelectorAll(".product-box__item");
  elems.forEach(elem =>{
    elem.style.display = 'flex';
  });
  switch(categoryValue){
    case '0':
      elems.forEach(elem =>{
          elem.style.display = 'flex';
      })
    break;
    case '1':
      elems.forEach(elem =>{
        if(!elem.classList.contains('ukrainian')){
          elem.style.display = 'none';
        }else{
          elem.style.display = 'flex';
        }
      })
    break;
    case '2':
      elems.forEach(elem =>{
        if(!elem.classList.contains('turkish')){
          elem.style.display = 'none';
        }else{
          elem.style.display = 'flex';
        }
      })
    break;
    case '3':
    elems.forEach(elem =>{
      if(!elem.classList.contains('belarus')){
        elem.style.display = 'none';
      }else{
        elem.style.display = 'flex';
      }
    })
    break;
  }
  elems.forEach(elem =>{
    priceValue = +priceValue;
    if(priceValue > 0){
      let price = parseInt(elem.querySelector('p').textContent);
      if(price > priceValue){
        elem.style.display = 'none';
      }
    }
  })
}


function order(){
let modal = document.querySelector(".modal");

let btn = document.querySelector(".btn-check");

let span = document.getElementsByClassName("close")[0];

let textOrder = document.querySelector(".text-order");

btn.onclick = function() {
  let result = "";
  modal.style.display = "block";
  let items = JSON.parse(localStorage.getItem("orders"));
  items.forEach(elem => {
    result += `<div>${elem.name}: ${elem.qty} : ${elem.price}</div>`
  })
  textOrder.innerHTML = result;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function submit(){

  let email = document.querySelector('input[name="email"]');
    email.setCustomValidity('Need your email');
    email.addEventListener('input', function () {
  
  if (this.value.trim() === '') {
    this.setCustomValidity('Need E-Mail Address');
  }
  else {
    this.setCustomValidity('');
  }
  }, false);

  email.addEventListener('invalid', function () {
  if (this.value.trim() !== '') {
    this.setCustomValidity("'" + this.value + "' Incorrect E-Mail Address");
  }
  }, false);

  let name = document.querySelector('input[name="name"]');
  name.setCustomValidity('Need your name');
  name.addEventListener('input', function () {
    if (this.value.trim()=== ''){
      this.setCustomValidity('Need your name');
    }
    else{
      this.setCustomValidity('');
    }
  },false);

  name.addEventListener('invalid', function () {
    if (this.value.trim() !== '') {
      this.setCustomValidity("'" + this.value + "' Invalid name");
    }
    }, false);

    let sub = document.querySelector('input[name="form_submit"]');
    if('input[name="name"]' &&'input[name="email"]' != true){
      sub.addEventListener('click',function(){
        alert("Thanks for your order. The manager will contact you.");
      })
    }
    
}
// ------------------------

// function showValue(id, value) {
//   document.getElementById(id).innerHTML = value;
// }
setTimeout(() => {
  var input = $('.datepicker').pickadate();
  var picker = input.pickadate('picker');
  picker.on('open', function() {
  })
}, 2000);

