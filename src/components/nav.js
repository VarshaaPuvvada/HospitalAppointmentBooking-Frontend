import { Link } from "react-router-dom";
import './Navbar.css';
export default function Nav() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Serenity<br/>Hospital</Link>
            <div className="nav">
                <li><Link to="/bookAppointment" className="nav-link">Book an Appointment</Link></li>
                <li><Link to="/doctors" className="nav-link">Doctors</Link></li>
                <li><Link to="/bookings" className="nav-link">My Bookings</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to='/login' className="nav-link">Sign Up</Link></li>
                <li><Link to="/xyz" className="nav-link">Login</Link></li>
            </div>
        </nav>
    );
}
