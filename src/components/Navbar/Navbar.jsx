import React from 'react'
import { useState, useEffect } from "react";
import './Navbar.css'
const Navbar = () => {
    useEffect(() => {
        let open = document.querySelector('.navbar--icon');
    let menu = document.querySelector('.nav--open');
    let close = document.querySelector('.nav--open-icon');
    
    open.addEventListener('click', function() {
      menu.classList.toggle('close');
    });
    
    
    close.addEventListener('click', function() {
      menu.classList.toggle('close');
    })
  },[]);

  return (
    <>
  <div className="navbar--container sticky">
    <div className="navbar--title">
      <h4>navigation</h4>
    </div>
    <div className="navbar--icon">
      <i className="fas fa-bars" />
    </div>
  </div>
  <div className="nav--open close sticky">
    <div className="nav--open-icon">
      <i className="fas fa-times" />
    </div>
    {/* <div className="nav--open-title">explore</div> */}
    <div className="nav--open-menu">
      <a href="">Home</a>
      <a href="">Our Templates</a>
      <a href="">Portfolio</a>
      <a href="">About US</a>
      <a href="">Contact Us</a>
      <a href="">Carrer</a>
    </div>
  </div>
</>

  )
}

export default Navbar