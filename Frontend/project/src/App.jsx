import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Courses from './Components/Courses';
import Home from './Components/Home';

const App = () => {
  return (
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/courses' element={<Courses />}></Route>
     </Routes>
    </div>
  )
}

export default App
