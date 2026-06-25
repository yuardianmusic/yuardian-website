document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}
const acc=document.querySelectorAll(".accordion");

acc.forEach(item=>{

item.addEventListener("click",function(){

this.classList.toggle("active");

let panel=this.nextElementSibling;

if(panel.style.display==="block"){

panel.style.display="none";

}else{

panel.style.display="block";

}

});

});
});

});
