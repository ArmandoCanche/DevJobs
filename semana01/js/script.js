// const botones = document.querySelectorAll('.button-apply-job')

// botones.forEach(boton => {
//     boton.addEventListener('click', ()=>{
//      boton.textContent = '¡Aplicado!',
//      boton.classList.add('is-applied')
//      boton.disabled = true
//     })
// });



const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', (event) =>{
    const element = event.target

    if(element.classList.contains('button-apply-job')){
        element.textContent = '¡Aplicado!',
        element.classList.add('is-applied')
        element.disabled = true
    }

    const firstJob = document.querySelector('.job-listing-card')

    if(firstJob.contains(element)){
        window.location.href ='../html/resultados.html'
    }
})



// <--------------------


const selectTecnologias = document.getElementById('filtro-tecnologias');
const selectUbicacion = document.getElementById('filtro-ubicacion');
const selectContrato = document.getElementById('filtro-contrato');
const selectExperiencia = document.getElementById('filtro-experiencia');


function filtrarTrabajos(){
    const articulos = document.querySelectorAll('.job-listing-card');
    const tecnologia = selectTecnologias.value;
    const ubicacion = selectUbicacion.value;
    const contrato = selectContrato.value;
    const experiencia = selectExperiencia.value;

    articulos.forEach((articulo) => {
        const cumpleTecnologia = tecnologia === ""  || articulo.dataset.tecnologia === tecnologia;
        const cumpleUbicacion = ubicacion === ""  ||articulo.dataset.ubicacion === ubicacion;
        const cumpleContrato = contrato === ""  ||articulo.dataset.contrato === contrato;
        const cumpleExperiencia = experiencia === ""  ||articulo.dataset.experiencia === experiencia;
        
        const visible = cumpleTecnologia && cumpleUbicacion && cumpleContrato && cumpleExperiencia;

        articulo.classList.toggle('is-hidden', !visible)
    });
}


selectTecnologias.addEventListener('change',filtrarTrabajos);
selectUbicacion.addEventListener('change',filtrarTrabajos);
selectContrato.addEventListener('change',filtrarTrabajos);
selectExperiencia.addEventListener('change',filtrarTrabajos);



// <-----------------------------------------


const container = document.querySelector('.jobs-listings')
fetch("../json/data.json")
.then((response) =>{
    return response.json();
})
.then((jobs) =>{
    jobs.forEach((job) =>{
        console.log(job)
        const article = document.createElement('article')
        article.className = 'job-listing-card'
        article.dataset.tecnologia = job.data.tecnologia
        article.dataset.ubicacion = job.data.ubicacion
        article.dataset.contrato = job.data.contrato
        article.dataset.experiencia = job.data.experiencia

        article.innerHTML= `
        <div>
            <h3>${job.articulo}</h3>
            <p>${job.empresa} | ${job.ubicacion}</p>
            <p>${job.descripcion}</p>
        </div>
        <div>
            <button class="button-apply-job">Aplicar</button>
        </div>
        `

        container.appendChild(article)
    })
})