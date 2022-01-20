import React from 'react';
import data1 from '../../../data.json';
import data2 from '../../../data copy.json';
import foto1 from '../../../assets/images/proyectoReact.png';
import foto4 from '../../../assets/images/proyectoBatatabit.png';
import foto3 from '../../../assets/images/proyectoBosstrap.png';
import foto2 from '../../../assets/images/e-commerceReact.png'

const Proyects = ({ idiom }) => {
  if (idiom === data2) {
    return (
      <div className='container' >
        <div className="proyects">
          <div className='proyects_img'>
            <img src={foto1} alt="Foto del proyecto portafolio con API" />
          </div>
          <div className='proyects_info'>
            <p id=''>Title: {data2.TitleProject1}</p>
            <p id=''>Company: {data2.Company1}</p>
            <p id=''>{data2.Description1}</p>
            <p id=''>Stack: {data2.Stack1 }</p>
            <a target='_blank' href="https://userpresentation.netlify.app/">
              <button>{data2.BotonProyects}</button>
            </a>
          </div>
        </div>
        <div className="proyects" id='proyects-rev'>
          <div className='proyects_info'>
          <p id=''>Title: {data2.TitleProject2}</p>
            <p id=''>Company: {data2.Company2}</p>
            <p id=''>{data2.Description2}</p>
            <p id=''>Stack: {data2.Stack2 }</p>
            <a target='_blank' href="https://carlosreactshop.netlify.app/">
              <button>{data2.BotonProyects}</button>
            </a>
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
          <p id=''>Title: {data2.TitleProject3}</p>
            <p id=''>Company: {data2.Company3}</p>
            <p id=''>{data2.Description3}</p>
            <p id=''>Stack: {data2.Stack3 }</p>
            <a target='_blank' href="https://carlosmen351.github.io/Bootstrap-5/">
              <button>{data2.BotonProyects}</button>
            </a>
          </div>
        </div>
        <div className="proyects" id='proyects-rev'>
          <div className='proyects_info'>
            <p id=''>Title: {data2.TitleProject4}</p>
            <p id=''>Company: {data2.Company4}</p>
            <p id=''>{data2.Description4}</p>
            <p id=''>Stack: {data2.Stack4 }</p>
            <a target='_blank' href="https://carlosmen351.github.io/Responsive-Desing_Mobile-First/">
              <button>{data2.BotonProyects}</button>
            </a>
          </div>
          <div className='proyects_img'>
            <img src={foto4} alt="Foto del proyecto portafolio con API" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='container' >
      <div className="proyects">
        <div className='proyects_img'>
          <img src={foto1} alt="Foto del proyecto portafolio con API" />
        </div>
        <div className='proyects_info'>
          <p id=''>Titulo: {data1.tituloProyecto1}</p>
          <p id=''>Empresa: {data1.Empresa1}</p>
          <p id=''>{data1.Descripcion1}</p>
          <p id=''>Stack: {data1.Stack1 }</p>
          <a target='_blank' href="https://userpresentation.netlify.app/">
            <button>{data1.BotonProyects}</button>
          </a>
        </div>
      </div>
      <div className="proyects" id='proyects-rev'>
        <div className='proyects_info'>
          <p id=''>Titulo: {data1.tituloProyecto2}</p>
          <p id=''>Empresa: {data1.Empresa2}</p>
          <p id=''>{data1.Descripcion2}</p>
          <p id=''>{data1.Stack2 }</p>
          <a target='_blank' href="https://carlosreactshop.netlify.app/"><button>{data1.BotonProyects }</button></a>
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
          <p >Titulo: {data1.tituloProyecto3}</p>
          <p >Empresa: {data1.Empresa3}</p>
          <p >{data1.Descripcion3}</p>
          <p >{data1.Stack3 }</p>
          <a target='_blank' href="https://carlosmen351.github.io/Bootstrap-5/">
            <button>{data1.BotonProyects}</button>
          </a>
        </div>
      </div>
      <div className="proyects" id='proyects-rev'>
        <div className='proyects_info'>
          <p id=''>Titulo: {data1.tituloProyecto4}</p>
          <p id=''>Empresa: {data1.Empresa4}</p>
          <p id=''>{data1.Descripcion4}</p>
          <p id=''>{data1.Stack4 }</p>
          <a target='_blank' href="https://carlosmen351.github.io/Responsive-Desing_Mobile-First/">
            <button>{data1.BotonProyects}</button>
          </a>
        </div>
        <div className='proyects_img'>
          <img src={foto4} alt="Foto del proyecto portafolio con API" />
        </div>
      </div>
    </div>
  )
}

export default Proyects
