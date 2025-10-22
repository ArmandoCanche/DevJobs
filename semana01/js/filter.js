
// <--------------------


const selectTecnologias = document.getElementById('filtro-tecnologias');
const selectUbicacion = document.getElementById('filtro-ubicacion');
const selectContrato = document.getElementById('filtro-contrato');
const selectExperiencia = document.getElementById('filtro-experiencia');

const searchInput = document.querySelector('#empleo-search-input')


function filtrarTrabajos(){
    const articulos = document.querySelectorAll('.job-listing-card');
    const tecnologia = selectTecnologias.value;
    const ubicacion = selectUbicacion.value;
    const contrato = selectContrato.value;
    const experiencia = selectExperiencia.value;
    const input = searchInput.value.toLowerCase();

    articulos.forEach((articulo) => {

        const tituloElemento = articulo.querySelector('h3')
        const tituloTexto = tituloElemento ? tituloElemento.textContent.toLowerCase() : '';

        const cumpleInput = input === "" || tituloTexto.includes(input);
        const cumpleTecnologia = tecnologia === ""  || articulo.dataset.tecnologia === tecnologia;
        const cumpleUbicacion = ubicacion === ""  ||articulo.dataset.ubicacion === ubicacion;
        const cumpleContrato = contrato === ""  ||articulo.dataset.contrato === contrato;
        const cumpleExperiencia = experiencia === ""  ||articulo.dataset.experiencia === experiencia;


        const visible = cumpleTecnologia && cumpleUbicacion && cumpleContrato && cumpleExperiencia && cumpleInput;

        articulo.classList.toggle('is-hidden', !visible)
    });
}


selectTecnologias.addEventListener('change',filtrarTrabajos);
selectUbicacion.addEventListener('change',filtrarTrabajos);
selectContrato.addEventListener('change',filtrarTrabajos);
selectExperiencia.addEventListener('change',filtrarTrabajos);
searchInput.addEventListener('input', filtrarTrabajos)


