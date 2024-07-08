import React, { useState } from "react";
import Axios from "axios";
import "./signIn.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { email, password };

        Axios.post("http://localhost:4000/patientRoute/xyz", data)
            .then((res) => {
                if (res.status === 200) {
                    alert(res.data.message);
                    localStorage.setItem("token", res.data.token);
                } else {
                    alert("Login failed");
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="heading">Login</h2>
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    );
}
