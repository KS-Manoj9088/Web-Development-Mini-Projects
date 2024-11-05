import React from 'react';
import { SiConsul } from "react-icons/si";

const Navbar = () => {
    return(
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;