import React from 'react'
import {Link} from 'react-router-dom'

const Navbars = function(){
    return(
        <>
            <nav className='navbar'>
                <div>
                    <Link>QCC</Link>
                </div>
                <div className='btngroup'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About Me</Link></button>
                    <button><Link to="/contact">Contact</Link></button>
                </div>
            </nav>
            
        </>
    )
}

export default Navbars;