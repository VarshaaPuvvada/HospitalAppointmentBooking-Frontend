import SignIn from "./signIn";
import {useState} from "react";
import "./login.css";
import Axios from "axios";

export default function SignUp(){
    const[arr,setArr]=useState([]);

    const getState=(childData)=>{
        setArr(childData);
    }

    const handleSubmit =(event)=>{
        const data={fname:arr[0],lname:arr[1],gender:arr[6],dob:arr[4],age:arr[5],phone:arr[7],email:arr[2],blood:arr[8],allergy:arr[9],password:arr[3]}
        Axios.post("https://hospitalappointmentbooking-backend.onrender.com/patientRoute/add-patient",data)
        .then((res)=>{
            if(res.status===200)
                alert("new record added")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
        event.target.reset();
    }

    return(
        <div >
            
            <form onSubmit={handleSubmit}>
                <SignIn getState={getState}/>
            </form>
        </div>
    )
}
