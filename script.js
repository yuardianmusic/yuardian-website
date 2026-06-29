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

    });

});
