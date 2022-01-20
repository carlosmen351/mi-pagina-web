import React from 'react';
import data1 from '../../../data.json';
import data2 from '../../../data copy.json';
import foto1 from '../../../assets/images/getHired.png';

const MyProject = ({idiom}) => {
  if (idiom === data2) {
    return (
      <div className='project'>
        <h1 className='project_titulo'>{data2.Title}</h1>
        <h2>{data2.TitleProject}</h2>
        <p className='project_p' >{data2.Description}</p>
        <div className='project_container'>
          <div className='project_container_img'>
            <img src={foto1} alt="" />
          </div>
          <div className='project_container_descripcion'>
            <p id='descripcion_empresa'>Empresa: {data2.Company}</p>
            <p id='descripcion_info'>{data2.MoreDescription}</p>
            <p id='descripcion_stack'>{data2.StackProye }</p>
            <a target='_blank' href="https://gethired-community-c8.vercel.app/">
              <button>{data2.MoreAbout}</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='project'>
      <h1 className='project_titulo'>{data1.titulo}</h1>
      <h2>{data1.tituloProye}</h2>
      <p className='project_p' >{data1.Descripcion}</p>
      <div className='project_container'>
        <div className='project_container_img'>
          <img src={foto1} alt="" />
        </div>
        <div className='project_container_descripcion'>
          <p id='descripcion_empresa'>Empresa: {data1.Empresa}</p>
          <p id='descripcion_info'>{data1.Descripcion11}</p>
          <p id='descripcion_stack'>{data1.StackProye }</p>
          <a target='_blank' href="https://gethired-community-c8.vercel.app/"><button>{data1.MoreAbout }</button></a>
        </div>
      </div>
    </div>
  );
}

export default MyProject;