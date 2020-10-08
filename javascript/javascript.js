function openmenu()
{
  var x=document.getElementById("navbar");
  var y=document.getElementById("menubtn");

  if(x.className==="navigation")
  {
    x.className=x.className+" hidden";
    y.style.fontSize="30px";
    y.innerHTML="&#9776;";
  }

  else
  {
    x.className="navigation";
    y.style.fontSize="40px";
    y.innerHTML="&times;";
  }
  // console.log(x.className);
}