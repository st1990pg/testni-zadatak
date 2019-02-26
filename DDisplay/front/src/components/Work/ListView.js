import React from 'react'
import { Col } from 'react-bootstrap';
export default ({item}) => {
  return (
  
        <Col xs={12}>
            <div className="list-view img_link">
                <img src={item.img} alt={item.title} />
            </div>
        </Col>
    
  )
}
