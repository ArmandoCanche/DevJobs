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
})