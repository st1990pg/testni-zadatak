import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <Container><h2>{this.props.title}</h2></Container>
      </div>
    )
  }
}
export default PageTitle;