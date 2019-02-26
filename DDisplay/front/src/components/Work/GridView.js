import React from 'react'
import { Col } from 'react-bootstrap';

export default ({item}) => {
  return (
    <Col xs={4}>
        <div className="grid-view img_link">
            <img src={item.img} alt={item.title} />
        </div>
    </Col>
  )
}
