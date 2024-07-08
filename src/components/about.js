import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Serenity Hospital</h1>
                <p>Your health is our priority.</p>
            </div>
            <div className="about-section">
                <h2>Our Mission</h2>
                <p>To provide high-quality healthcare services to all our patients with compassion and respect.</p>
            </div>
            <div className="about-section">
                <h2>Our Vision</h2>
                <p>To be the leading healthcare provider in the region, known for our excellence in patient care, medical education, and research.</p>
            </div>
            <div className="about-section">
                <h2>Our Team</h2>
                <p>Our dedicated team of doctors, nurses, and staff work tirelessly to ensure that you receive the best possible care.</p>
            </div>
            <div className="about-team">
                <div className="team-member">
                    <img src="https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain" alt="Doctor 1" />
                    <h3>Dr. John Doe</h3>
                    <p>Chief Medical Officer</p>
                </div>
                <div className="team-member">
                    <img src="https://th.bing.com/th/id/OIP.WZuFeD-_Btx-rRmknaI_9AHaHa?rs=1&pid=ImgDetMain" alt="Doctor 2" />
                    <h3>Dr. Jane Smith</h3>
                    <p>Head of Cardiology</p>
                </div>
                <div className="team-member">
                    <img src="https://th.bing.com/th/id/OIP.G_y69vUKhWOrB6B-2mzkGAHaHa?rs=1&pid=ImgDetMain" alt="Doctor 3" />
                    <h3>Dr. Emily Johnson</h3>
                    <p>Head of Neurology</p>
                </div>
            </div>
        </div>
    );
}
