import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import '../assets/images/logo.css';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className="logo-round" />
        <h1><b>Home</b></h1>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/resume' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Resume
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
