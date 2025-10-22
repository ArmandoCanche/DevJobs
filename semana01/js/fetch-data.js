





// <----FILTRADO POR PAGINAS CON FUNCIÓN

const itemPorPagina = 3;
let currenPage = 1;
const container = document.querySelector('.jobs-listings')
let allJobs = [];


function renderPage(jobsArray, pageNumber){
    container.innerHTML = '';

    const startIndex = (pageNumber - 1) * itemPorPagina;
    console.log(startIndex);
    const endIndex = startIndex + itemPorPagina;
    console.log(endIndex)

    const jobsToShow = jobsArray.slice(startIndex,endIndex);


    jobsToShow.forEach((job) => {
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

}

// <----- FETCH


fetch("../json/data.json")
.then((response) =>{
    return response.json();
})
.then((jobs) =>{
    allJobs = jobs;

    renderPage(allJobs,currenPage)
})