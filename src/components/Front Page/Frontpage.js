import React, { Component } from 'react';
import './Frontpage.css';
// import logo from './joseBautista.jpeg';

class Frontpage extends Component{
    constructor(props){
        super(props)
        this.state ={

        }


       
    }

    render(){
        return(
            
            
            <div>
                       <ul>
     <li className ="git" >  <a  href="https://github.com/Josefbautista94"target="_blank" rel="noopener noreferrer" > Check Out My GitHub! </a> </li>
    <li className ="linkedIn"> <a href= "https://www.linkedin.com/in/jose-bautista-271b98148/" target = "_blank" rel="noopener noreferrer" >Check Out My LinkedIn!  </a></li>
    <li className = "contact"> <a href= "https://www.linkedin.com/in/jose-bautista-271b98148/" target = "_blank" rel="noopener noreferrer" >My Contact Info</a></li>
    <li> <a className ="name">Jose F. Bautista </a></li>
    </ul>
                <header className="App-header">

     
    {/* <img src={logo} className="Front-pic" alt="logo" />  */}
    <button className ="Buttons"> Bio</button>
      

    

    
    
   </header> 
            </div>
           
        )
    }

}

export default Frontpage;