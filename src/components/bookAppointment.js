import{ useState} from "react";
import BookDoctor from "./bookDoctors";
import Axios from "axios";

export default function BookAppointment(){
    const[arr,setArr]=useState([]);

    const getState=(childData)=>{
        setArr(childData);
    }

    const handleSubmit=(event)=>{
        const data={email:arr[0],date:arr[1],time:arr[2],spec:arr[3],reason:arr[4]};

    Axios.post("https://hospitalappointmentbooking-backend.onrender.com/appointmentRoute/add-appointment",data)
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
        <div>
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <BookDoctor getState={getState}/>
            </form>
        </div>
    )
}
