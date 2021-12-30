import React from 'react';
import data from '../../../data.json'
import foto1 from '../../../assets/images/getHired.png'

const MyProject = () => {
  return (
    <div className='project'>
      <h1 className='project_titulo'>{data.titulo}</h1>
      <h2>{data.tituloProye}</h2>
      <p className='project_p' >{data.Descripcion}</p>
      <div className='project_container'>
        <div className='project_container_img'>
          <img src={foto1} alt="" />
        </div>
        <div className='project_container_descripcion'>
          <p id='descripcion_empresa'>Empresa: {data.Empresa}</p>
          <p id='descripcion_info'>{data.Descripcion2}</p>
          <p id='descripcion_stack'>{data.StackProye }</p>
          <a target='_blank' href="https://github.com/Platzi-Master-C8"><button>{data.MoreAbout }</button></a>
        </div>
      </div>
    </div>
  );
}

export default MyProject;