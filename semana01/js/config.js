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


