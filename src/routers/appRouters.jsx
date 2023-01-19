import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Main from '../components/main';
import Moviesinfo from '../components/pages/moviesinfo';



const AppRouters = () => {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='/:search' element={<Main/>}/>
            <Route path='/moviesinfo/:id' element={<Moviesinfo/>}/>
           
          </Route>
          
          <Route path='/*' element={<h1>Not Found 404</h1>}/>
        </Routes>
    </Router>
  )
}

export default AppRouters