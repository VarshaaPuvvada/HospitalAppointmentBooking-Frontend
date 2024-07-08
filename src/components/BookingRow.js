import React from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

export default function BookingRow(props) {
    const { _id,email, date, time, spec, reason } = props.obj;
    const handleClick=()=>{
        Axios.delete("http://localhost:4000/appointmentRoute/delete-appointment/"+_id)
        .then((res)=>{
            if(res.status===200){
                alert("Appointment is deleted");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{spec}</td>
            <td>{reason}</td>
            <td className="btn-container">
                <Link to={"/update-appointment/"+_id}>
                <button className="btn btn-info">Update</button></Link>
                <button className="btn btn-danger" onClick={handleClick}>Delete</button>
            </td>
        </tr>
    );
}
