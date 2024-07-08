import {useState} from "react";
import './bookAppointment.css'
export default function BookDoctor(props){
    const [email,setEmail]=useState("");
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const [spec,setSpec]=useState("");
    const [reason,setReason]=useState("");

    const arr=[email,date,time,spec,reason];

    const handleClick=()=>{
        props.getState(arr);
    }

    return(
        <div className="appointment-form">
        <label className="form-label">Enter patient email id</label>
        <input onChange={(event)=>setEmail(event.target.value)}type="email" className="form-control"></input>
        <label className="form-label">Select the date of appointment</label>
        <input onChange={(event)=>setDate(event.target.value)} type="date" className="form-control"/>
        <label className="form-label">Select appointment time</label>
        <input onChange={(event)=>setTime(event.target.value)}type="time" className="form-control"/>
        <label className="form-label">Select the doctor for the specialization you require</label>
        <select onChange={(event)=>setSpec(event.target.value)}>
            <option selected>Select </option>
            <option value="ENT">ENT</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Pediatrician">Pediatrician</option>
        </select>
        <label className="form-label">Reason for a visit:</label>
        <textarea onChange={(event)=>setReason(event.target.value)}/>
        <button onClick={handleClick} type="submit" class="btn">Submit</button>
        </div>
    )
}