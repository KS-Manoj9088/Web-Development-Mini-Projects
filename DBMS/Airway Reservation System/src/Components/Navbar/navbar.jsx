import React from 'react';

//imported icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

//imported images
import dubai from '../../Assets/Dubai.jpg';



const Navbar = () => {
    return(
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon'/>
                </div>
                <div className='none flex'>
                    <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logoDiv">
                    <img src="{dubai}" alt="dubai-img"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;