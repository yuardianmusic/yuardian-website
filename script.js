/* ==========================================
   Smooth Scroll Navigation
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   Accordion
========================================== */

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item=>{

    const button = item.querySelector(".accordion-header");

    const content = item.querySelector(".accordion-content");

    const icon = item.querySelector(".icon");

    button.addEventListener("click",()=>{

        const isOpen = item.classList.contains("active");

        accordionItems.forEach(i=>{

            i.classList.remove("active");

            i.querySelector(".accordion-content").style.maxHeight = null;

            i.querySelector(".icon").textContent = "+";

        });

        if(!isOpen){

            item.classList.add("active");

            content.style.maxHeight = content.scrollHeight + "px";

            icon.textContent = "−";

        }
       
/*=========================================
FAQ
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

const answer = item.querySelector(".faq-answer");

const icon = item.querySelector(".faq-icon");

question.addEventListener("click",()=>{

const open = item.classList.contains("active");

faqItems.forEach(i=>{

i.classList.remove("active");

i.querySelector(".faq-answer").style.maxHeight=null;

i.querySelector(".faq-icon").textContent="+";

});

if(!open){

item.classList.add("active");

answer.style.maxHeight=answer.scrollHeight+"px";

icon.textContent="−";

}

});

});

    });

});
