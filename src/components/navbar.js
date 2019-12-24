import React from 'react'
import './navbar.css'

function Navbar()
{
     return (
     <div>
         <ul>
             <li><img className="name-logo" src="images/andrew-gunderman.jpg" alt="Andrew Gunderman"/></li>
             <li><a href="#home">HOME</a></li>
             <li><a href="#about">ABOUT</a></li>
             <li><a href="#podcast">PODCAST</a></li>
             <li><a href="#speaking">SPEAKING</a></li>
             <li><a href="#blog">BLOG</a></li>
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