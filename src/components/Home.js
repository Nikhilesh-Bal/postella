import React from "react";
import Feed from "./Feed";
import SideNav from "./SideNav";
import './Home.css';
const Home=()=>{
    return(
        <div className="home">
            <SideNav/> 
            <Feed/>
        </div>
    );
}
export default Home;