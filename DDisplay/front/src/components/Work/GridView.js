import React from 'react'
import { Col } from 'react-bootstrap';

export default ({item, numCol}) => {
  return (
    <Col xs={numCol}>
        <div className="grid-view img_link">
            <img src={item.img} alt={item.title} />
        </div>
    </Col>
  )
}
