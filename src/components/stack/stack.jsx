import React from 'react';
import data1 from '../../../data.json'
import data2 from '../../../data copy.json'

import stack from '../../../assets/images/StackD.png'

const Stack = ({ idiom }) => {
  if (idiom === data2) {
    return (
      <div className='stack'>
        <h1>{data2.Technologies}</h1>
        <img src={stack} alt="" />
      </div>
    )
  }
  return (
    <div className='stack'>
      <h1>{data1.Tecnologias}</h1>
      <img src={stack} alt="" />
    </div>
  )

}

export default Stack;