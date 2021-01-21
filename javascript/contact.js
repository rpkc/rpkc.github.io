        
const scriptURL = 'https://script.google.com/macros/s/AKfycbyG7n5hoasPKx7zYR1wwgZwO6HDPhOOtFA4u3xCAYzSM956PDc_mdN6/exec';
const form = document.forms['contact']
form.addEventListener('submit', e => 
{
  document.getElementById("overlay").style.display = "block";
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response =>
    {
      document.getElementById("overlay").style.display = "none";
      form.reset();
      snackbar(`Thanks For Contact <i class="fa fa-smile-o" aria-hidden="true"></i>`);
    }
  ).catch(error => {snackbar(error.message);document.getElementById("overlay").style.display = "none";form.reset();})
 }
)

function snackbar(message) 
{
  var x = document.getElementById("snackbar");  
  x.className = "show";
  x.innerHTML=message;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}