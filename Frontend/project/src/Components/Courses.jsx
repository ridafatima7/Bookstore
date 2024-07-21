import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
import axios from "axios"
const Courses = () => {
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
  return (
    <>
    <Navbar />
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 mb-10 text-center justify-center items-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here !:)</span></h1>
        <div className='mt-5'>
            <p>Lorem ipsum dolor sit amet. Qui debitis rerum At inventore tempore cum voluptatum quasi ut earum atque cum nemo odit. Sit quidem repudiandae in recusandae tempore sed soluta maxime. Id dignissimos doloribus ea doloribus error ut perferendis mollitia et praesentium esse ex voluptas dignissimos cum adipisci expedita et corporis fugiat? Est quod rerum ut totam dolores ut dolor dolorem vel maiores error et vitae distinctio qui earum nisi cum nisi nesciunt.</p>
            <Link to='/'> <button className='px-4 py-2 rounded-md mb-4  mt-6 bg-pink-500 text-white hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>
        <div className=' grid grid-cols-1  md:grid-cols-3'>
            {
               books.map((item)=>( 
                 <Cards item={item} key={item.id} />
               ))
            }
        </div>
     </div>
    </div>
    <Footer />
    </>  
  )
}

export default Courses
