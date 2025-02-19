import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Header } from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'
import { AboutUs } from './component/AboutUs'
import { ArrayDemo } from './component/ArrayDemo'
import { UseStateDemo } from './component/UseStateDemo'
import { Navbar } from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import { DefaultPage } from './component/DefaultPage'
import { Movies } from './component/Movies'
import { Pricing } from './component/Pricing'
import { Error404 } from './component/Error404'
import { Play } from './component/Play'
import { Form } from './assets/forms/Form'
import { DummyForm } from './assets/forms/DummyForm'
import { FormValidator } from './assets/forms/FormValidator'
import {ValidateForm} from './assets/forms/ValidationForm';
import { Api } from './component/apis/Api'
import { ApiPost } from './component/apis/ApiPost'
// import { SearchMovie } from './component/omdb/SearchMovie'
function App() {
  // Js ralated code will be here
// var   male=true;

  return (
    <div>
      <Navbar/>

      {/* PRACTICE OF REACT ROUTE */}
      <Routes>
          <Route path="/" element={<DefaultPage/>}></Route>  
          <Route path="/movies/" element={<Movies/>}></Route>  
          <Route path="/play/:id" element={<Play/>}></Route>  
          <Route path="/pricing" element={<Pricing/>}></Route>  

          {/* Forms Routes */}
          
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/hform' element={<DummyForm/>}></Route>
          <Route path="/register" element={<FormValidator/>}></Route>
          <Route path="/validate" element={<ValidateForm/>}></Route>
          <Route path="/*" element={<Error404/>}></Route>  


          {/* API fetching */}
          <Route path='/apifetch' element={<Api/>}></Route>
          <Route path='/apifetch/:name' element={<Api/>}></Route>

          {/* OMDB api for movies */}
          {/* <Route path='/searchmovie' element={<SearchMovie/>}></Route> */}

          {/* POST fetch from form */}
          <Route path='/postapi' element={<ApiPost/>}></Route>
      </Routes>



    {/* HTML RELATED CODE WILL BE HERE

    <UseStateDemo></UseStateDemo>
    <Header></Header>
    <Content></Content>
    <AboutUs></AboutUs>
    <Footer></Footer>
    <ArrayDemo></ArrayDemo> */}
 

      
      </div>
  )
}

export default App
