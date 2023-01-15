import React from "react";
import { useEffect } from "react";
import "./App.css";
import $ from "jquery";
import { TimelineMax } from "gsap/gsap-core";
import { gsap, Power2, Power4 } from "gsap";
function App() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    
    hamburger.addEventListener('click', ()=>{
       //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove("open");
          links.forEach(link => {
            link.classList.remove("fade");
          });
          hamburger.classList.remove("toggle");
        });
    });
  });
  return (
    <div>
      <div className="Video-Section">
       <video poster="" loop autoPlay muted>
          <source src="/assets/v.webm" type="video/webm" />
          <source src="/assets/v.mp4" type="video/mp4" />
        </video>
        <header>
        <nav>
        <h1 className="logo"><a href="index.html" class="brand">PORTFOLIO</a></h1>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul className="nav-links">
                    <li><a href="#" className='navbtn-home'>Home</a></li>
                    <li><a href="#portfolio" className='navbtn'>Portfolio</a></li>
                    <li><a href="#contact" className='navbtn'>Contact</a></li>
                    <li><a href="#social"  className='navbtn'>Socials</a></li>
                    <li><a href="#about"  className='navbtn'>About</a></li>
                </ul>
                
    </nav>
</header>
<div className="name-section">
          <h1 className="abdul">ABDUL</h1>
          <h1 className="mannan">MANNAN</h1>

          <p className="line">
            Professional &nbsp;<span>Graphic&nbsp;Designer </span>&nbsp;and&nbsp;<span> &nbsp;Video&nbsp;Editor </span>.</p>
            <p className="line1">With over 2 years of experience in Adobe PhotoShop,</p> 
            <p className="line1">Adobe
            Illustrator, Premier Pro, After Effects, and Blender.</p>
          
          <p className="read">Read More...</p>
           <button className="hirebtn">Hire Me</button> 
          
        </div>
        </div>
    </div>
  );
}

export default App;
