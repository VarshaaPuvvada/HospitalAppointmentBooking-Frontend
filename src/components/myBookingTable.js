import { useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import Axios from "axios";
import "./myBookingTable.css";

export default function MyBookingTable() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://hospitalappointmentbooking-backend.onrender.com/appointmentRoute/")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data);
                else
                    return Promise.reject();
            })
            .catch((err) => alert(err));
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <BookingRow key={ind} obj={val} />;
        });
    };

    return (
        <div>
            <h1>Bookings</h1>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="text-center">Patient Email</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Time</th>
                    <th className="text-center">Specialization</th>
                    <th className="text-center">Reason</th>
                    <th className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </div>
    );
}
