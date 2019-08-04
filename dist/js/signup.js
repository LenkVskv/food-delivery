$( document ).ready(function() {
  $('.account').click((event) =>{
    event.preventDefault();
    let fullName = $("#name").val();
    let email = $("#email").val();
    let pass = $("#password").val();
    localStorage.setItem("account",JSON.stringify({fullName, email, pass}));
    window.location.href = "index.html";
  })
});