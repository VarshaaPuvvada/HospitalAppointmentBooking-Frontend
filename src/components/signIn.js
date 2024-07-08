import { Link } from 'react-router-dom';
import {useState} from "react";
import './signIn.css';

export default function SignIn(props) {
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[email,setEmail] =useState("")
    const[password,setPassword]=useState("");
    const[dob,setDob]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[number,setNumber]=useState("");
    const[blood,setBlood]=useState("");
    const[allergy,setAllergy]=useState("");

    const arr=[fname,lname,email,password,dob,age,gender,number,blood,allergy];

    const handleClick=()=>{
        props.getState(arr);
    }

    return(
        <div className="container">
         <div>
                    <div className="sub-heading">
                        <h2>Create Account</h2>
                    </div>
                    <label className="form-label">Enter your First Name</label>
                    <input onChange={(event)=>setFName(event.target.value)}className="form-control" placeholder="First Name"/>
                    <label className="form-label">Enter your Last Name</label>
                    <input onChange={(event)=>setLName(event.target.value)} className="form-control" placeholder="Last Name"/>
                    <label className="form-label">Enter your Email ID</label>
                    <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" placeholder="Email"/>
                    <label className="form-label">Enter Password</label>
                    <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" placeholder="Password"/>
                    <label className="form-label">Enter your Date of Birth</label>
                    <input type="date" onChange={(event)=>setDob(event.target.value)} className="form-control"/>
                    <label className="form-label">Enter your Age</label>
                    <input type="number" onChange={(event)=>setAge(event.target.value)} className="form-control"/>
                    <label className="form-label">Enter your Gender</label>
                    <input onChange={(event)=>setGender(event.target.value)} className="form-control"/>
                    <label className="form-label">Enter your Phone Number</label>
                    <input type="tel" className="form-control" onChange={(event)=>setNumber(event.target.value)} placeholder="Phone Number"/>
                    <label className="form-label">Enter your Blood Group</label>
                    <input className="form-control" onChange={(event)=>setBlood(event.target.value)} placeholder="Blood Group"/>
                    <label className="form-label">Enter your Allergy</label>
                    <input className="form-control" onChange={(event)=>setAllergy(event.target.value)} placeholder="Allergy"/>
                    <button className="btn" onClick={handleClick}>Submit</button>
                    <br/>
                    <span className="login">Already have an account?&nbsp; <Link path="/xyz">Login</Link></span>
                </div>
        </div>
    );

}

