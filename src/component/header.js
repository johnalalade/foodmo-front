import React from "react";
import './header.css';
import NavBar from './navbar';
import HeaderContent from "./HeaderContent";

function HeaderSection(){
    return (
        <div>
            <navbar>
                <NavBar/>
                <HeaderContent/>
            </navbar>
        </div>
        
    );
}

export default HeaderSection;