//create structure for the card
import React from "react";
import girl_avatar from './images/girl_avatar.png'
import './index.css'

const User= function(props){// props change the images
    return(
        <div>
            <section className="card">
                <a>
                    <img src={props.image} alt="avatar of the girl"></img>

                </a>
                <div className="content">
                    <a className="author">{props.name}</a>

                </div>
                <div className="metadata">
                    Today at <span className="date">{props.date}</span>

                </div>
                <div className="comment">
                    "{props.comments}"
                </div>

            </section>
        </div>
    )
}

export default User;