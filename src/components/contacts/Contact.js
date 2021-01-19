import React from 'react';

function Contact(props) {
    return (
        <div className="contact">
            <div className="information">
                <div className="contact-block">
                    <img className="contact-img-profile" src="../img/profile.png" alt="profile"></img>
                </div>
                <div className="contact-block">
                    <p className="contact-info-name">{props.firstName + ' ' + props.lastName}</p>
                    <p className="contact-info-gender"> <img className="contact-img" src={"../img/" + (props.gender === undefined ? "notSpecified" : props.gender) + ".png"} alt={props.gender}></img></p>
                </div>
            </div>
            <div className="telephon">
                <p className="contact-telephon">{props.phone}</p>
            </div>
        </div>
    )
}



export default Contact;