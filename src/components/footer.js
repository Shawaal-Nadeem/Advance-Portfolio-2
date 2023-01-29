import React from "react";

function Footer() {
  
  return (
    <div>
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
                href="https://github.com/MannanBabar16"
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

export default Footer;
