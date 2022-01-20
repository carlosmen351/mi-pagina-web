import React from 'react';
import foto from '../../../assets/images/perfilMaster.png'
import foto1 from '../../../assets/images/PerfilSmall.jpg'
import baner from '../../../assets/images/coverDark.png'

const ImagesSection = () => {
  return (
    <div className='imagesContainer'>
      <img className='imagesContainer_foto' src={foto1} alt="Foto de carlos" />
      <img className='imagesContainer_baner' src={baner} alt="Foto de la informacion de carlos" />
    </div>
  );
}

export default ImagesSection;