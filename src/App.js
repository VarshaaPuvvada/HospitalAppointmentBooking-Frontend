import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Login from "./components/login";
import Doctor from "./components/doctor";
import About from "./components/about";
import BookAppointment from "./components/bookAppointment"
import LoginForm from "./components/loginForm";
import MyBookingTable from "./components/myBookingTable";
import UpdateAppointment from "./components/updateAppointment";

function App() {
  return (
    <div>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/bookAppointment" element={<BookAppointment/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/doctors" element={<Doctor/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/xyz" element={<LoginForm/>}/>
          <Route path="/bookings" element={<MyBookingTable/>}/>
          <Route path="/update-appointment/:id" element={<UpdateAppointment/>} />
          
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
