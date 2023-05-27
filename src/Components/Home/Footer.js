import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Footer () {
  return (
    <div className="footer-container">
      <div className="footer-background">
        <div className="footer-width">
          <div className="footer-display">
            <div class="footer-col">
              <h4 className="footer-heading">company</h4>
              <ul>
                <li><a href="/About">About</a></li>
                <li><a href="/Work">Work</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-heading">Other Projects</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-heading">Our Team</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-heading">follow us</h4>
              <div class="social-links">
                <a href=""><BsFacebook /></a>
                <a href=""><BsInstagram/></a>
                <a href=""><BsTwitter/></a>
                <a href=""><BsLinkedin/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Footer;