import React from "react";
import $ from "jquery";
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

    hamburger.addEventListener("click", () => {
      //Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
    });
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
        hamburger.classList.remove("toggle");
      });
    });

    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#7900E0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  });
  return (
    <div>
      <div id="progress">
        <span id="progress-value">&#x1F815;</span>
      </div>
      <div className="Video-Section">
        <video poster="" loop autoPlay muted>
          <source src="/videos/v.webm" type="video/webm" />
          <source src="/videos/v.mp4" type="video/mp4" />
        </video>
        <header>
          <nav>
            <h1 className="logo">
              <a href="index.html" class="brand">
                PORTFOLIO
              </a>
            </h1>
            <div className="burger-background">
              <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
              </div>
            </div>
           
            <ul className="nav-links">
              <li>
                <a href="#" className="navbtn-home">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbtn">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="navbtn">
                  Contact
                </a>
              </li>
              <li>
                <a href="#social" className="navbtn">
                  Socials
                </a>
              </li>
              <li>
                <a href="#about" className="navbtn">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="name-section">
          <h1 className="abdul">ABDUL</h1>
          <h1 className="mannan">MANNAN</h1>

          <p className="line">
            Professional &nbsp;<span>Graphic&nbsp;Designer </span>
            &nbsp;and&nbsp;<span> &nbsp;Video&nbsp;Editor </span>.
          </p>
          <p className="line-v">
            With over 2 years of experience in Adobe PhotoShop,
          </p>
          <p className="line-v">
            Adobe Illustrator, Premier Pro, After Effects, and Blender.
          </p>

          <p className="read">Read More...</p>
         <a href="https://wa.me/+923004256110"> <button className="hirebtn">Hire Me</button></a>
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
      </div>
      <div className="viewbtn">
        <button className="viewMore">View More</button>
      </div>
      <div className="about" id="about">
        <div className="passport-pic">
          <img src="/images/p1.png"></img>
        </div>
        <div className="about-text">
          <h1 className="about-heading">About</h1>
          <p className="about-lines">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the
            <br /> 1500s, when an unknown printer took a galley of type and
            scrambled it to
            <br /> make a type specimen book. It has survived not only five
            centuries, but also
            <br /> the leap into electronic typesetting, remaining essentially
            unchanged. It was
            <br /> popularised in the 1960s with the release of Letraset sheets
            containing Lorem
            <br /> Ipsum passages, and more recently with desktop publishing
            software like...
          </p>
          <p className="phone-about-lines">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
        </div>
      </div>

      <div className="Expertise-sections">
        <h1 className="expertise-heading">Fields of Expertise</h1>
        <div className="expertise">
          <div className="list1">
            <h4 className="expertise-head">1. Graphic Design </h4>
            <ul className="expertise-list">
              <li className="points">Thumbnails/ banner design</li>
              <li className="points">Advertisment, Social media Posts</li>
              <li className="points">Flyers, Brochures, Menu Design</li>
              <li className="points">UI/UX Design</li>
              <li className="points">PhotoEditing</li>
              <li className="points">3D Artworks</li>
              <li className="points">Posters/Artworks...</li>
            </ul>
          </div>
          <div className="list2">
            <h4 className="expertise-head">2. Video Editing </h4>
            <ul className="expertise-list">
              <li className="points">Gaming Montages</li>
              <li className="points">Youtube Videos</li>
              <li className="points">Animations 2D/3D</li>
              <li className="points">Intros</li>
              <li className="points">Advertisment</li>
              <li className="points">Advertisment</li>
              <li className="points">Advertisment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="softwares">
        <h4 className="softwares_head">Softwares I use</h4>
        <img className="softwarepic" src="/images/software.png"></img>
      </div>
      <div className="contact-section" id="contact">
        <br />
        <h4 className="contact-head">Contact</h4>
        <div className="c-icons">
          <div class="wrapper">
            <div class="social-icons">
            <a
                class="social-icon facebook"
                href="https://www.facebook.com/profile.php?id=100046391871581"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-facebook"></i>
              </a>

              <a
                class="social-icon instagram"
                href="https://ig.me/m/mannan.babar16"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="social-icon linkedin"
                href="https://www.linkedin.com/in/abdul-mannan-0b040a200/"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="social-icon youtube"
                href="https://www.youtube.com/channel/UC4rJwcjlZ1jv9cQT8cus6Mw"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                class="social-icon github"
                href=""
                target="_blank"
                rel="author"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="last">
          <p className="num">+92 300 4256110</p>
          <div className="m-btn">
           <a href="mailto:mannan.babar16@gmail.com"><button className="mail-btn">Click to send mail</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
