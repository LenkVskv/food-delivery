document.addEventListener('DOMContentLoaded', function(){
  onDocumentReady();
});
function onDocumentReady(){
  addButtonListeners();
  categories();
  filter();
 order();
 submit();
//  showValue();
var aSlider = new Slider( ".products-box" );
	
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
function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}	

Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		this.wrapper = this.el.querySelectorAll( ".product-box__item" );
		this.navigate();
	},
	navigate: function() {
	
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
	},
	
	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
			var index = parseInt( a.getAttribute( "data-slide" ), 8 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
			
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			
		}, false);
	},
	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}	
};

// function showValue(id, value) {
//   document.getElementById(id).innerHTML = value;
// }
setTimeout(() => {
  var input = $('.datepicker').pickadate();
  var picker = input.pickadate('picker');
  picker.on('open', function() {
  })
}, 2000);

