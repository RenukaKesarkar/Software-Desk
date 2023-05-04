import React from 'react';
import './Header.css';
import SocialNav from './SocialNav';
const Header = () => {

	return (

  <div class='nav-cointainer'>
    <div className='nav-holder'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h2 class="navbar-brand" href="#">Software Desk</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Comapny
          </a>
          <ul class="dropdown-menu">
            <h6>About Software Desk</h6>
            <li><a class="dropdown-item" href="#">About Us </a></li>
            <li><a class="dropdown-item" href="#">Case Study</a></li>
            <li><a class="dropdown-item" href="#">Training</a></li>
            <li><a class="dropdown-item" href="#">Career</a></li>
            <li><a class="dropdown-item" href="#">Blog</a></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blockchain
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Solutions
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hire Developers
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      
      

     
    </div>
   
    
  </div>
  
</nav>

    </div>

	
<SocialNav/>
		
</div>
	)
}

export default Header;

// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// function Header() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
// 			<div className="logo">
// 			<h3>SOFTWARE DESK</h3>
// 			</div>
			
// 			<nav ref={navRef}>
				
//       <a href="/#">Company</a>
// 				<a href="/#">Blockchain</a>
// 				<a href="/#">Our Solutions</a>
// 				<a href="/#">Product</a>
//         <a href="/#">Hire Developer</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
//         <a class="btn btn-primary" href="#" role="button">GET A QUOTE</a>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default Header;