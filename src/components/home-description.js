import React from 'react';
import './home-description.css';

function HomeDescription()
{
    return(
        <div>
            <div className="img-container">
            <img src="images/portrait.png" className="portrait" alt="Andrew Gunderman" />
            </div>
            
            <div className="container">
                <div className="top-left">
                <h1>𝘼 𝘽𝙊𝙔 𝙁𝙍𝙊𝙈 𝙉𝙊𝙒𝙃𝙀𝙍𝙀</h1>
                    <p>Andrew Gunderman is a 19-year-old software developer, IT professional, podcast host, blogger, serial entrepreneur, 
                        and freshman at Ohio State University who has been featured in articles all over the web for his achievements 
                        and renowned ambition. Andrew is one of the founding fathers of Sprout, founder and CEO of Vyra, co-host of his 
                        podcast based on life and entrepreneurship, and software engineer performing contract work for several companies 
                        in the Ohio area.
                        <br/>
                        <br/>
                        Read My Story >>
                    </p>
                </div>
            </div>
            <div className="clear-floats"></div>
            
        </div>
    )
}

export default HomeDescription;