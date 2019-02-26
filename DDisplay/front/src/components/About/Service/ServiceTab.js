import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceBt from './ServiceBt';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../../../img/service', false, /\.(gif|jpe?g|svg|png)$/));
  
  const service =[
    {
      "id": 0,
      "title": "WEBSITE",
      "description":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
      vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
       quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`,
        "list": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec."
        ],
        "logo": "/src/img/service/web.png"
    },
    {
      "id": 1,
      "title": "PHOTOGRAPHY",
      "description":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
      vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
       quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`,
        "list": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec."
        ],
        "logo": "/src/img/service/photo.png"
  
    },
    {
      "id": 2,
      "title": "SEO",
      "description":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
      vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
       quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`,
        "list": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec."
        ],
        "logo": "/src/img/service/seo.png"
    },
    {
      "id": 3,
      "title": "APPLICATION",
      "description":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
      vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi,
       quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`,
        "list": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec."
        ],
        "logo": "/src/img/service/app.png"
    }
  ]


class ServiceTab extends Component {
    constructor(){
        super();

        this.state ={
            active: 'PHOTOGRAPHY'
        }

        this.addCon = this.addCon.bind(this)
    }
  
    addCon(e){
        this.setState({
            active: e.target.getAttribute('value')
        })
    }
    render() {
        return (
            <div>
            <Container>
                <Row>
                    
                    {service.map((ser, i) =>{
                        let className = "button-service";
                        if(this.state.active === ser.title){
                            className = "button-service active"
                        }
                        return(
                            <Col key={i}><ServiceBt className={className} item={ser} onClick={this.addCon} /></Col>
                        )
                    } )}
                
                </Row>
                </Container>
                
                    <div className="tab-body">
                    <Container>
                        {service.map((ser, i) =>{
                            let className = "tab-content";
                            if(this.state.active === ser.title){
                                className = "tab-content active"
                            }
                            return(
                                <div key={ser.id} className={className}>
                                    <p>{ser.description}</p>
                                    <ul>
                                        {ser.list.map((li, i) => <li key={i}>{li}</li>)}
                                    </ul>
                                </div>
                            )
                        } )}
                    </Container>
                    </div>
                    
                    </div>
            
        )
  }
}
export default ServiceTab;