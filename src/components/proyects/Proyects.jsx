import React from 'react'
import data from '../../../data.json'
import foto1 from '../../../assets/images/proyectoReact.png'
import foto2 from '../../../assets/images/proyectoBatatabit.png'
import foto3 from '../../../assets/images/proyectoBosstrap.png';

const Proyects = () => {
  return (
    <div className='container' >
      <div className="proyects">
        <div className='proyects_img'>
          <img src={foto1} alt="Foto del proyecto portafolio con API" />
        </div>
        <div className='proyects_info'>
          <p id=''>Titulo: {data.tituloProyecto1}</p>
          <p id=''>Empresa: {data.Empresa1}</p>
          <p id=''>{data.Descripcion1}</p>
          <p id=''>Stack: {data.Stack1 }</p>
          <a target='_blank' href="https://userpresentation.netlify.app/">
            <button>{data.BotonProyects}</button>
          </a>
        </div>
      </div>
      <div className="proyects" id='proyects-rev'>
        <div className='proyects_info'>
          <p id=''>Titulo: {data.tituloProyecto2}</p>
          <p id=''>Empresa: {data.Empresa2}</p>
          <p id=''>{data.Descripcion2}</p>
          <p id=''>{data.Stack2 }</p>
          <a target='_blank' href="https://carlosmen351.github.io/Responsive-Desing_Mobile-First/"><button>{data.BotonProyects }</button></a>
        </div>
        <div className='proyects_img'>
          <img src={foto2} alt="Foto del proyecto portafolio con API" />
        </div>
      </div>
      <div className="proyects">
        <div className='proyects_img'>
          <img src={foto3} alt="Foto del proyecto portafolio con API" />
        </div>
        <div className='proyects_info'>
          <p id=''>Titulo: {data.tituloProyecto3}</p>
          <p id=''>Empresa: {data.Empresa3}</p>
          <p id=''>{data.Descripcion3}</p>
          <p id=''>{data.Stack3 }</p>
          <a target='_blank' href="https://carlosmen351.github.io/Bootstrap-5/">
            <button>{data.BotonProyects}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Proyects
