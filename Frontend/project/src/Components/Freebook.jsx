import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from "axios"
const Freebook = () => {
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    const getBooks=async()=>{
      try{
         const res=await axios.get("http://localhost:5008/book");
         console.log(res.data);
         setBooks(res.data);
      }catch(error){
        console.log(error)
      }
    }
    getBooks();
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        spaceBetween:10,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
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
      <div className='mt-5 mb-5'>
      <Slider {...settings}>
      {books.map((item)=>(
        <>
          <Cards item={item} key={item.id} />
        </>
      ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook
