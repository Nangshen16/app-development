import React from "react";
import { Link } from "react-router-dom";

const Navbars = function(){
    return(
        <>
            <nav className="navbar">
                <div className="t1">
                    <Link>NSH News App</Link>
                </div>
                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">Technology News</Link></button>
                    <button><Link to="/contact">Health News</Link></button>


                </div>

            </nav>
        </>
    )
}

export default Navbars;