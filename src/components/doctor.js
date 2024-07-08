import { useState, useEffect } from "react";
import DoctorRow from "./doctorRow";
import Axios from "axios";
import "./doctors.css";

export default function Doctor() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/doctorRoute/")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data);
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <DoctorRow key={ind} obj={val} />
        })
    }

    return (
        <div className="doctor-container">
            {ListItems()}
        </div>
    );
}
