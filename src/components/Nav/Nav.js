import React, { Component } from 'react';
import './Nav.css'
import {Link} from 'react-router-dom';

class Nav extends Component{


    render(){
        return(
         <div>
              <ul>
<Link to ="/Front-Page">
              <li className ="mainPage"><a>Main Page</a></li>
              </Link>
              
     <li className ="git" >  <a  href="https://github.com/Josefbautista94"target="_blank" rel="noopener noreferrer" > Check Out My GitHub! </a> </li>
    

     
    <li className ="linkedIn"> <a href= "https://www.linkedin.com/in/jose-bautista-271b98148/" target = "_blank" rel="noopener noreferrer" >Check Out My LinkedIn!  </a></li>
    

    <Link to ="/Contact">
   <li className = "contact"> <a href= "https://www.linkedin.com/in/jose-bautista-271b98148/" target = "_blank" rel="noopener noreferrer" >My Contact Info</a></li>
   </Link>

    <li> <a className ="name">Jose F. Bautista </a></li>
    </ul>
         </div>   
        )
    }
}

export default Nav;