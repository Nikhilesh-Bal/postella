import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './styles/SideNav.css';
//import LoginButton from "./Login";

const SideNav=()=>{
    const { user, isAuthenticated, isLoading,logout } = useAuth0();
    return(
        <div className="sidenav-wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>POSTELLA.</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Come , connect with amazing people like you!</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Profile</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul className="list-unstyled CTAs">
                <li>
                    <a  className="download" onClick={()=>logout({returnTo:window.location.origin})}>Logout</a>
                </li>
            </ul>
            
            
        </nav>

        
    </div>
    );
}
export default SideNav;