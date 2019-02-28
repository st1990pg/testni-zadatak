import React, { Component } from 'react'
import PageTitle from '../PageTitle';
import { Container, Row, Col } from 'react-bootstrap';
import GridView from './GridView';
import ListView from './ListView';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../img/work', false, /\.(gif|jpe?g|svg|png)$/));


class Work extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
      view: 'grid',
      Work: [],
      per: 12,
      page: 1,
      total_pages: 3,
      filter: [],
      filte: false
    };
    this.changeView = this.changeView.bind(this);
    this.filetrWork = this.filetrWork.bind(this);
    this.loadWork = this.loadWork.bind(this);
      this.getDocumentHeight = this.getDocumentHeight.bind(this);
      this.getScrollTop = this.getScrollTop.bind(this);
  }

  getDocumentHeight() {
        const body = document.body;
        const html = document.documentElement;

        return Math.max(
            document.body.scrollHeight, document.body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
    };
    getScrollTop() {
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

  loadWork(){
    const {per, page, Work, total_pages} = this.state;
    if(page > total_pages) return;
    const url = `http://localhost:3000/work?_page=${page}&_limit=${per}`
    fetch(url)
    .then( res => res.json())
    .then(json => 
      this.setState({
          Work: [...Work, ...json],
          page: page + 1,
        }), console.log(this.state.page)
      )
  }
    componentDidMount(){
        this.loadWork();
    }

    componentDidUpdate(){
      if(this.state.page < this.state.total_pages) {
              window.addEventListener('scroll', () => {
                  if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight) return;
                  this.loadWork();
                  console.log(this.state.Work, this.state.total_pages, 'doauysdohausd');
              })
      }
  }

  changeView(e) {
  
    this.setState({
      view: e.target.getAttribute('value')
    })
  }

  filetrWork(e){
    
    let data = this.state.Work;
    let filt;
    const category = e.target.parentElement.getAttribute('value');

    switch(category){
      case 'All':
        filt = data
        return this.setState({
          filter: filt,
          filte: false
        })
      case 'Print': 
        filt = data.filter(data => data.category == "print");
        return this.setState({
          filter: filt,
          filte: true
        })
      case 'Photography': 
        filt = data.filter( data => data.category === 'Photography');
        return this.setState({
          filter: filt,
          filte: true
        })
      case 'Web': 
        filt = data.filter( data => data.category === 'Web');
        return this.setState({
          filter: filt,
          filte: true
        })
      case 'Applications': 
        filt = data.filter( data => data.category === 'Applications');
        return this.setState({
          filter: filt,
          filte: true
        })
        default:
        filter = data
        return filt;
    }
      
  }


  render() {
    let worke = this.state.filte ? this.state.filter : this.state.Work;
    let Gred;
    let activeGrid = "active";
    let activeList = ""
    if(this.state.view === 'grid'){
      Gred = worke.map((item, i) => <GridView key={i} item={item} />);
      activeGrid = "fas fa-th-large active";
      activeList = "fas fa-bars"
    }
    if(this.state.view === 'list'){
      Gred = worke.map((item, i) => <ListView key={i} item={item} />);
      activeGrid = "fas fa-th-large";
      activeList = "fas fa-bars active"
    }

    return (
      <div className="work-page">
        <PageTitle title="CHECK OUT WHAT I CAN DO" />
        <Container>
          <Row>
            <Col>
              <div className="filter-work">

                <div value = 'All' onClick={this.filetrWork}><h5>All  /</h5></div>
                <div value = 'Print' onClick={this.filetrWork}><h5>Print  /</h5></div>
                <div value = 'Photography' onClick={this.filetrWork}><h5>Photography  /</h5></div>
                <div value = 'Web' onClick={this.filetrWork}> <h5>Web  /</h5></div>
                <div value = 'Applications' onClick={this.filetrWork}> <h5>Applications  /</h5></div>
      
              </div>
            </Col>
            <Col>
              <div className="view-work">
                <i className={activeGrid} value='grid' onClick={this.changeView}></i>
                <i className={activeList} value='list' onClick={this.changeView}></i>
              </div>
            </Col>
          </Row>
          <Row className="wokr-images">
              {Gred}
          </Row>
        </Container>

      </div>
    )
  }
}
export default Work;
