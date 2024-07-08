import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateAppointment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({
        email: "",
        date: "",
        time: "",
        spec: "",
        reason: ""
    });

    useEffect(() => {
        Axios.get(`http://localhost:4000/appointmentRoute/update-appointment/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setAppointment(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`https://hospitalappointmentbooking-backend.onrender.com/appointmentRoute/update-appointment/${id}`, appointment)
            .then((res) => {
                if (res.status === 200) {
                    alert("Appointment updated successfully");
                    navigate("/bookings"); // Redirect to the bookings page
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="appointment-form">
            <h1>Update Appointment</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label">Patient Email</label>
                <input
                    name="email"
                    value={appointment.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    required
                />
                <label className="form-label">Date</label>
                <input
                    name="date"
                    value={appointment.date}
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    required
                />
                <label className="form-label">Time</label>
                <input
                    name="time"
                    value={appointment.time}
                    onChange={handleChange}
                    type="time"
                    className="form-control"
                    required
                />
                <label className="form-label">Specialization</label>
                <select
                    name="spec"
                    value={appointment.spec}
                    onChange={handleChange}
                    className="form-control"
                    required
                >
                    <option value="">Select</option>
                    <option value="ENT">ENT</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Pediatrician">Pediatrician</option>
                </select>
                <label className="form-label">Reason</label>
                <textarea
                    name="reason"
                    value={appointment.reason}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

