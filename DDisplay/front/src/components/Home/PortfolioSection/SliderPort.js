import React, { Component } from 'react';
import Slider from "react-slick";
import SliderItem from './SliderItem';
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../img/slider', false, /\.(gif|jpe?g|svg)$/));

const items = [
    {
        "id": 0,
        "img": "/src/img/slider/slider-1.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 1,
        "img": "/src/img/slider/slider-2.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 2,
        "img": "/src/img/slider/slider-3.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 3,
        "img": "/src/img/slider/slider-4.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 4,
        "img": "/src/img/slider/slider-5.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 5,
        "img": "/src/img/slider/slider-2.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    },
    {
        "id": 6,
        "img": "/src/img/slider/slider-5.jpg",
        "title": "Lorem ipsum dolor",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu."
    }
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default class SliderPort extends Component {
  sliderHandler(dir) {
    console.log("slide moved")
  }

  render() {
    let numIt = screen.width > 1725 ? 5 : screen.width < 1725 && screen.width > 1125 ? 3 : screen.width < 1125 ? 1 : 0;
    let centIm = screen.width < 1125? false: true;
    const settings = {
        className: "center",
        centerMode: centIm,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: numIt,
        speed: 1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
      <div className="port-slider">
        <Slider {...settings}>
            {items.map(item =><div key={item.id}><SliderItem item={item}/></div>)}
        </Slider>
      </div>
    )
  }
}
