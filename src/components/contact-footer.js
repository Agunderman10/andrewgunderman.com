import React from 'react';
import './contact-footer.css';

function ContactFooter()
{
    return(
        <div>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>

            <div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-instagram"></i></button>
                    <h3>Personal Instagram</h3>
                </div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-linkedin"></i></button>
                    <h3>LinkedIn</h3>
                </div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-apple"></i></button>
                    <h3>Apple Podcasts</h3>
                </div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-instagram"></i></button>
                    <h3>Podcast Instagram</h3>
                </div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-youtube"></i></button>
                    <h3>Podcast Youtube</h3>
                </div>
                <div className="same-line">
                    <button className="mouseOverEffect"><i className="fa fa-spotify"></i></button>
                    <h3>Spotify Podcasts</h3>
                </div>
            </div>
            <footer>&copy; 2020 Andrew Gunderman | All Rights Reserved</footer>
        </div>
    )
}

export default ContactFooter;