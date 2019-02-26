import React from 'react'

export default ({title, align}) => {
    return (
    <div>
      <div className="button-footer" style={{ textAlign: align}}>
        <button>{title}</button>
      </div>
    </div>
  )
}

//CLICK HERE TO FIND OUT
