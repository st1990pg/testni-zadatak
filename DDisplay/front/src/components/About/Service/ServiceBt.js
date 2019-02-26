import React from 'react'

export default ({item, onClick, className}) => {
  return (
    <div value={item.title} onClick={onClick} className={className}>
        <div value={item.title} className="centre">
            <img value={item.title} src={item.logo} alt={item.title} />
            <h5 value={item.title} >{item.title}</h5>
        </div>  
    </div>
  )
}
