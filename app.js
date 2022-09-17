const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const succes = document.querySelector(".succes");
const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formSub = document.getElementById("formSub");
formSub.addEventListener("click", function(e) {
    e.preventDefault();
});


button.addEventListener("click", function (e) {   
    
    if (input.value.length === 0 || !input.value.match(validation)) {
        error.classList.remove('hidden');
        error.classList.add('inline');
        input.classList.remove('border-slate-200')
        input.classList.add('border-red-500')
        return timeoutFunc;
         
         
    } else {
        succes.classList.remove('hidden');
        succes.classList.add('inline');
        input.classList.add('border-green-200')
        input.classList.remove('border-red-500')
        succes.textContent = "Thank you for subscribing to our newsletter!";
        return timeoutFunc;
    }
    
});


const time = setInterval(() => {
  error.classList.remove('inline');  
  error.classList.add('hidden');
  input.classList.remove('border-red-500');
}, 3000);
