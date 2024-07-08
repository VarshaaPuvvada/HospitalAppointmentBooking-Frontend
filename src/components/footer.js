import React from 'react';
import './footer.css';
export default function Footer(){
    return(
        <div>
            <div class="footer-container">
        <div class="footer-section inline-block">
            <h4>Contact Information</h4>
            <p>123 Hospital Street, City, State, ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@hospital.com</p>
            <p>Fax: (123) 456-7891</p>
        </div>
        
        <div class="footer-section">
             <h4>Follow Us</h4>
            <a href="https://facebook.com/serenity-hospital" target="_blank">Facebook</a>
            <a href="https://twitter.com/serenity-hospital" target="_blank">Twitter</a>
            <a href="https://instagram.com/serenity-hospital" target="_blank">Instagram</a>
            <a href="https://linkedin.com/serenity-hospital" target="_blank">LinkedIn</a>
            <a href="https://youtube.com/serenity-hospital" target="_blank">YouTube</a>
        </div>
        
        <div class="footer-section">
            <h4>Legal</h4>
             <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="/disclaimer">Disclaimer</a>
            <a href="/accessibility">Accessibility Statement</a>
        </div>
        
        <div class="footer-section">
            <h4>Newsletter Signup</h4>
            <form>
                <input type="email" placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
        
        <div class="footer-section">
            <h4>Emergency</h4>
            <p>Emergency Contact: (123) 456-7899</p>
        </div>
        
        <div class="footer-section">
            <h4>Operating Hours</h4>
            <p>Mon-Fri: 8 AM - 8 PM</p>
            <p>Sat-Sun: 9 AM - 5 PM</p>
            <p>Emergency: 24/7</p>
        </div>
    </div>
        <p class="h5">&copy; 2024 Serenity Hospital. All rights reserved.</p>
</div>
    )


}