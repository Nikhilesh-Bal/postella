import React from "react";
import Feed from "./Feed";
import SideNav from "./SideNav";
import { useAuth0 } from "@auth0/auth0-react";
//import LoginButton from './Login';
import './styles/Home.css';
const Home=()=>{
    const { isAuthenticated } = useAuth0();
    return(
    <>
      {isAuthenticated && <div className="home">
            <SideNav/> 
            <Feed/>
             </div> }
    </>
       
    );
}
export default Home;