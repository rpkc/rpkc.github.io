        
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvZNxAXwC-3UEnsszn7C-JI1tiX74Lz3aC4Q_d4TsssdjF9ls/exec';
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
      snackbar();
    }
  ).catch(error => console.error('Error!', error.message))
 }
)

function snackbar() 
{
  var x = document.getElementById("snackbar");  
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}