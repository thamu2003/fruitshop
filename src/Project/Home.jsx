import React from 'react'
import './Home.css'

import Footer from './Footer'

const Home=()=> {
  return (
     <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light  position-sticky  fixed-top   ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand fw-bold  fs-3" href="#">Fruit shop</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Product">Proudct</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='/Contact'>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Register">Register</a>
        </li>
      </ul>
      <form class="d-flex mt-2 ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className=' im container-fluid'>
       {/* <marquee behavior="scroll" direction="left">Fruit are sales now get offer for 50% buy one get one Free..............</marquee> */}
       <img src="plums.jpg  " className=' w-100 ' alt="" />
</div>
<h1>Product</h1>
 <div className='img-container'>
    <div>
      <img src="Fruit-4.jpg" className=' img-fluid' alt="" />
    </div>
    <div>
      <img src="Fruit-2.jpg" className=' img-fluid' alt="" />
    </div>
    <div>
      <img src="Fruit-3.jpg" className=' img-fluid' alt="" />
    </div>
    </div>
    <marquee className=' mt-2 ' behavior="scroll" direction="left" >Fruit are sales now get offer for 50% buy one get one Free..............</marquee>
    <div className='img2-container mt-3 '>
    <div>
      <img src="Fruit-5.jpg"className=' img-fluid' alt="" height={250} width={400}/>
    </div>
    <div>
      <img src="Fruit-6.jpg" className=' img-fluid' alt="" height={250} width={400}/>
    </div>
    <div>
      <img src="Fruit-7.jpg" className=' img-fluid' alt="" height={250} width={450}/>
    </div>
    </div>
<Footer/>
     </>
  )
}

export default Home