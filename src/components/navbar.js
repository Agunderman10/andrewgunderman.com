import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import './navbar.css';

function Navbar()
{
     return (
     <div className="component">
         <ul>
             <li><img className="name-logo" src="images/andrew-gunderman.jpg" alt="Andrew Gunderman"/></li>
             <li>
               <Link to={{pathname:'/'}}>HOME</Link>
             </li>
             <li>
               <Link to={{pathname:'/about'}}>ABOUT</Link>
             </li>
             <li>
               <Link to={{pathname:'/podcast'}}>PODCAST</Link>
             </li>
             <li>
               <Link to={{pathname:'/speaking'}}>SPEAKING</Link>
             </li>
             <li>
               <Link to={{pathname:'/blog'}}>BLOG</Link>
             </li>
             <li className="dropdown">
               <a href="javascript:void(0)" className="dropbtn">MORE</a>
               <div className="dropdown-content">
                 <a href="#">Praise</a>
                 <a href="#">Consulting</a>
                 <a href="#">Contact</a>
               </div>
             </li>
         </ul>
     </div>
     )
}

export default Navbar;