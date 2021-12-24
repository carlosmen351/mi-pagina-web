import React from 'react';
import data from '../../../data.json'

import stack from '../../../assets/images/StackD.png'

const Stack = () => {
  return (
    <div className='stack'>
      <h1>{data.Tecnologias}</h1>
      <img src={stack} alt="" />
    </div>
  )
}

export default Stack;