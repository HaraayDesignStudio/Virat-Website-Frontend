import React from 'react'

const ValuesCard = ({image, name, disc}) => {
  return (
    <div className='vlaues-card-container'>
        <img src={image} alt="valuesimage" />
        <p className='values-card-name'>{name}</p>
        <p className='values-card-disc'>{disc}</p>
    </div>
  )
}

export default ValuesCard