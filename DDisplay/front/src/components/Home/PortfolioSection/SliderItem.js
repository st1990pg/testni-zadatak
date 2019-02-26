import React from 'react'

export default ({item}) => {
  return (
    <div className="img_link">
      <img src={item.img} />
      <div className="slider-text">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
