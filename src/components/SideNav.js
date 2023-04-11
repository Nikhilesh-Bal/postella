import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './SideNav.css';
//import LoginButton from "./Login";

const SideNav=()=>{
    const { user, isAuthenticated, isLoading,logout } = useAuth0();
    return(
        <div class="sidenav-wrapper">
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>POSTELLA.</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Come , connect with amazing people like you!</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Profile</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul class="list-unstyled CTAs">
                <li>
                    <a  class="download" onClick={()=>logout({returnTo:window.location.origin})}>Logout</a>
                </li>
            </ul>
            
            
        </nav>

        
    </div>
    );
}
export default SideNav;