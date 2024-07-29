//create structure for the card
import React from "react";
import one from './images/one.jpeg';
import './index.css';

const User = function(props){
    return(
        <div>
            <section className="card">
                <a>
                    <img src={props.image} alt="image of number one"></img>
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>

                </div>
                <div className="comment">
                    "{props.comments}"

                </div>

            </section>
        </div>
    )
}
export default User;