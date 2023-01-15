import React from "react";
import { useEffect } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    document.querySelectorAll(".image-container img").forEach((image) => {
      image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
          image.getAttribute("src");
      };
    });
    document.querySelector(".popup-image span").onclick = () => {
      document.querySelector(".popup-image").style.display = "none";
    };


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
          <source src="/videos/v.webm" type="video/webm" />
          <source src="/videos/v.mp4" type="video/mp4" />
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
        <div className="portfolio" id="portfolio">
          <h1 className="portfolio-heading">PORTFOLIO</h1>
          <div className="portfolioButtons">
            <button className="GraphicDesign">Graphic Design</button>
            <p className="lineDesign">
              <hr className="sline" />
            </p>
            <button className="GraphicDesign">Video Editing</button>
          </div>
        </div>
        <div className="showcase">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3c.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3c.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3c.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3l.png" />
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="image-container">
                <div className="image">
                  <img src="/images/d3c.png" />
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3c.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3c.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3c.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3l.png" alt="" />
        </div>
        <div className="popup-image">
          <span>&times;</span>
          <img src="/images/d3c.png" alt="" />
        </div>
        <div className="viewbtn">
        <button className="viewMore">View More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
