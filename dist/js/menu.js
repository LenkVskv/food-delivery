document.addEventListener('DOMContentLoaded', function(){
  onDocumentReady();
});
function onDocumentReady(){
  addButtonListeners();
  categories();
  filter();
 order();
 submit();
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
      generalQty.textContent = +qty + +generalQty.textContent;
      sum.textContent = price*qty + +sum.textContent;
    });
  });
}
function categories(){
  let categorySelect = document.querySelectorAll(".select-control")[0];
  let priceSelect = document.querySelectorAll(".select-control")[1];
  
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
function order(){
let modal = document.querySelector(".modal");

let btn = document.querySelector(".btn-check");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
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
    email.setCustomValidity('Нужна ваша почта');
    email.addEventListener('input', function () {
  
  if (this.value.trim() === '') {
    this.setCustomValidity('Нужна ваша почта');
  }
  else {
    this.setCustomValidity('');
  }
  }, false);

  email.addEventListener('invalid', function () {
  if (this.value.trim() !== '') {
    this.setCustomValidity("'" + this.value + "' Неверный адрес электронной почты");
  }
  }, false);

  let name = document.querySelector('input[name="name"]');
  name.setCustomValidity('Нужна ваша почта');
  name.addEventListener('input', function () {
    if (this.value.trim()=== ''){
      this.setCustomValidity('Нужно ваше имя');
    }
    else{
      this.setCustomValidity('');
    }
  },false);

  name.addEventListener('invalid', function () {
    if (this.value.trim() !== '') {
      this.setCustomValidity("'" + this.value + "' Неверное имя");
    }
    }, false);

    let sub = document.querySelector('input[name="form_submit"]');
    if('input[name="name"]' &&'input[name="email"]' == true){
      sub.addEventListener('click',function(){
        alert("Спасибо за ваш заказ.");
      })
    }
    
}
