import React from 'react'
import Slider from "react-slick";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
const Freebook = () => {
    const filterData=list.filter((data)=>data.category==='Free')
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-x1 pb-2 '>Free Offered Courses</h1>
      <p className=''>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      It is placeholder text commonly used in the graphic, print, and publishing industries.
      </p>
      <div>
      <Slider {...settings}>
      {filterData.map((item)=>(
        <>
          <Cards />
        </>
      ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook
