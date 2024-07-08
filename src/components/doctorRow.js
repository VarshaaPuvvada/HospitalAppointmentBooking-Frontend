import React from "react";
import "./doctors.css";

export default function DoctorRow(props) {
    const { fname, lname, gender, phone, email, specialization, qualifications, shiftTiming, languagesSpoken } = props.obj;
    return (
        <div className="doctor-card">
            <h3 class="doctorName">{fname} {lname}</h3>
            <div className="card-section">
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Phone Number:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Qualifications:</strong> {qualifications}</p>
                <p><strong>Shift Timing:</strong> {shiftTiming}</p>
                <p><strong>Languages Spoken:</strong> {languagesSpoken}</p><br></br>
            </div>
            
        </div>
    );
}
