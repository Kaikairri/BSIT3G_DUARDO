const text = document.getElementById("Id");
  let currentSize =16;
 
 function increase(){
   currentSize +=3;
   text.style.fontSize = currentSize +"px"
 }
 
  function decrease(){
   currentSize = Math.max(1, currentSize -3);
   text.style.fontSize = currentSize +"px"
 }
 