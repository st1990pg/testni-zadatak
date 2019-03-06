import React from 'react'

export default () => {
  const h = {
     height: (screen.height-240) +'px'
    }
    return (
    <div className="not-found" style={h}>
      <h1 className="center_e" style={{color: "#2ecc71"}}>Sorry, can’t find that</h1>
    </div>
  )
}
