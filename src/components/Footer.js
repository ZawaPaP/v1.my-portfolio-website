import React from 'react';
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to receive our latest information
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/policy'>Privacy Policy</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
    </div>
    <section className="social-media">
        <div className="social-media-wrap">
            <small className="website-rights">© 2020 Kazuhide Izawa All Rights Reserved</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </Link>
            </div>
        </div>
    </section>
    </div>
    )
}

export default Footer
