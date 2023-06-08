import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Blog Website. All rights reserved.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Subscribe to our newsletter" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};


export default Footer;