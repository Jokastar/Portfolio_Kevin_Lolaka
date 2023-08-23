import { projects, techLogo } from "./projects_data";



const grid_items = document.querySelectorAll(".portfolio-grid-item");
const modal = document.querySelector(".modal"); 

function openModal(){
    modal.showModal();
    window.scroll(0, 0); 
}

function closeModal(){
    modal.close();
    modal.innerHTML=""; 
}

//adding event listener for all more_btn
for(let item of grid_items){
    item.addEventListener("click", (e)=>{
        const p_number = e.currentTarget.id;
        const project = projects.find(project => project.p_number == p_number); 
        const modalInnerHtml = `<div class="cross"> <img src="../../public/xmark-solid.svg"/></div>
        <div class="modal-header" id="modal-header-one">
            <h1 id="modal-title">${project.title}</h1>
            <span id="modal-role-desc">${project.role}</span>
        </div>
        <div class="modal-header">
            <span id="modal-year">${project.year}</span>
            <div class="tech-stack">
                <h2>stack technique</h2>
                <div class="tech-logos">
                </div>
            </div>
        </div>
        <div class="modal-main">
            <div class="modal-section" id="modal-presentation">
                <h2>presentation</h2>
                <p>${project.presentation}</p>
                <p>${project.mission}</p>
            </div>
            <div class="modal-section" id="modal-realisation">
                <h2>realisation</h2>
            </div>
            <div class="links">
                <div class="link"><a href="${project.github}" target="_blank">voir code<a/></div>
            </div>
        </div>`
        modal.innerHTML = modalInnerHtml;
        
        const techStack = document.querySelector(".tech-logos");
        const realisation = document.getElementById("modal-realisation"); 
        
        for(let r of project.realisation){
            const div = document.createElement("div"); 
            const r_title = document.createElement("p");
            r_title.innerText = r.fonctionality_name;
            const r_txt = document.createElement("p");
            r_txt.innerText = r.fonctionality_desc ; 
            div.appendChild(r_title)
            div.appendChild(r_txt); 
            realisation.appendChild(div); 
        } 

        for(let tech of project.techStack){
            let t = techLogo.find(o => o.tech === tech); 

            const div = document.createElement("div"); 
            div.classList.add("tech-logo")
            const img = document.createElement("img"); 
            const p = document.createElement("p"); 
            img.src = t.img; 
            p.innerText = t.tech
            div.appendChild(img);
            div.appendChild(p);

            techStack.appendChild(div); 
        }

        modal.showModal();
        
        const close_button = document.querySelector(".cross img"); 
        close_button.addEventListener("click", closeModal); 
        
    })
}
