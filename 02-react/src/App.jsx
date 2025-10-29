import { useState } from 'react'
import './App.css'

function App() {

  function JobCard({data, articulo, empresa, ubicacion, descripcion}) {

            const [isApplied, setIsApplied] = React.useState(false);

            const text = isApplied ? "Aplicado" : "Aplicar"

            function handleClick(){
                alert("Hola mundo desde React!");
            }
            return (
                <article className="job-listing-card"
                data-tecnologia ={data?.tecnologia}
                data-ubicacion = {data?.ubicacion}
                data-contrato = {data?.contrato}
                data-experiencia = {data?.experiencia}
                >
                    <div >
                        <h3>{articulo}</h3>
                        <h4>{empresa} | {ubicacion}</h4>
                        <p>{descripcion}</p>
                    </div>
                    <div>
                        <button onClick={handleClick} className="button-apply-job">{text}</button>
                    </div>
                </article>
            )
    }

    function Footer() {
        return (
          <footer>
              <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
          </footer>
        )
    }

    function Pagination(currentPage, totalPages){

      const pages = Array.from({length: totalPages}, (_, i) => i + 1);

      return(
          <section >


              <nav class="pagination">
                  <a href="#">&lt;</a>
                  <a href="#" class="is-active">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">&gt;</a>
              </nav>
          </section>
      )
    }


    function SearchFormSection(){
      return(
        <>
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades en el sector tecnológico</p>
          <form role="search">
              <div>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                  <input id="empleo-search-input" type="text" placeholder="Buscar trabajos, empresas o habilidades"/>
              </div>
          </form>
        </>

      )
    }

    function Header(){
      return(
        <header>
            <div>
                <svg width="1.5em" height="2em" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.08 24 4 19.248 9.955 8.752l8.085 4.744L18.045 4h11.91l.005 9.496 8.085-4.744L44 19.248 35.92 24 44 28.752l-5.955 10.496-8.085-4.744L29.955 44h-11.91l-.005-9.496-8.085 4.744L4 28.752z" fill="currentColor" fill-rule="evenodd"/></svg>
                <h2> DevJobs</h2>
            </div>
            <nav>
                <a href="./index.html">Inicio</a>
                <a href="./empleos.html" class="nav-selected">Empleos</a>
                <a href="">Empresas</a>
                <a href="">Salarios</a>
            </nav>
            <div>
                <a href="">Subir CV</a>
                <img src="../resources/uifaces-human-avatar.jpg" alt="Foto de perfil" class="avatar" />
            </div>
        </header>
      )
    }



  return (
    <>
      <Header />
      <main>
        <SearchFormSection />

      </main>
    </>

  )
}

export default App



        // <section>
        //     <h2>Empleos disponibles</h2>
        //     <div id="root" class="jobs-listings">
        //           <div className="job-listings">
        //             <JobCard 
        //                 articulo="Desarrollador Frontend React.js" 
        //                 empresa="Tech Solutions" 
        //                 ubicacion="Remoto" 
        //                 descripcion="Buscamos un desarrollador frontend con experiencia en React.js para unirse a nuestro equipo dinámico."
        //                 data={{tecnologia: "React", ubicacion: "Remoto", contrato: "Tiempo completo", experiencia: "2 años"}}
        //             />
        //             <JobCard 
        //                 articulo="Ingeniero de Software React" 
        //                 empresa="Innovatech" 
        //                 ubicacion="Ciudad de México" 
        //                 descripcion="Únete a nuestro equipo como ingeniero de software especializado en React para desarrollar aplicaciones web innovadoras."
        //                 data={{tecnologia: "React", ubicacion: "Ciudad de México", contrato: "Medio tiempo", experiencia: "3 años"}}
        //             />      
        //             <JobCard 
        //                 articulo="Desarrollador Web Junior" 
        //                 empresa="WebStart" 
        //                 ubicacion="Remoto" 
        //                 descripcion="Oportunidad para desarrolladores web junior con conocimientos en React.js y ganas de aprender."
        //                 data={{tecnologia: "React", ubicacion: "Remoto", contrato: "Pasantía", experiencia: "1 año"}}
        //             />
        //             <JobCard 
        //                 articulo="Especialista en React y Redux" 
        //                 empresa="AppCreators" 
        //                 ubicacion="Buenos Aires" 
        //                 descripcion="Estamos buscando un especialista en React y Redux para liderar proyectos de desarrollo de aplicaciones web." 
        //                 data={{tecnologia: "React, Redux", ubicacion: "Buenos Aires", contrato: "Tiempo completo", experiencia: "4 años"}}
        //             />
        //           </div>
        //     </div>
        // </section>
