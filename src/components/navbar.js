import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import './navbar.css';

function Navbar()
{
     return (
     <div>
         <ul>
             <li><img className="name-logo" src="images/andrew-gunderman.jpg" alt="Andrew Gunderman"/></li>
             <li>
               <BrowserRouter>
                 <Link to={{pathname:'/'}}>HOME</Link>
               </BrowserRouter>
             </li>
             <li>
               <BrowserRouter>
                 <Link to={{pathname:'/about'}}>ABOUT</Link>
               </BrowserRouter>
             </li>
             <li>
               <BrowserRouter>
                 <Link to={{pathname:'/podcast'}}>PODCAST</Link>
               </BrowserRouter>
             </li>
             <li>
               <BrowserRouter>
                 <Link to={{pathname:'/speaking'}}>SPEAKING</Link>
               </BrowserRouter>
             </li>
             <li>
               <BrowserRouter>
                 <Link to={{pathname:'/blog'}}>BLOG</Link>
               </BrowserRouter>
             </li>
             <li class="dropdown">
               <a href="javascript:void(0)" class="dropbtn">MORE</a>
               <div class="dropdown-content">
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