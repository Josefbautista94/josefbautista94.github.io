import React, { Component } from 'react';
import './Frontpage.css';
import logo from './joseBautista.jpeg';


class Frontpage extends Component{
    constructor(props){
        super(props)
        this.state ={

        }


       
    }

    render(){
        return(
            
            <div>
                <header className="App-header">

    <img src={logo} className="Front-pic" alt="logo" /> 

    <p>
     <code> <button className = "Buttons"> My Bio </button></code> 
    </p>
     <a
      className="Website-Links"
      href="https://github.com/Josefbautista94"
       target="_blank"
      rel="noopener noreferrer"
    >
     Check out My GitHub!
    </a>

    <a
    className = "Website-Links"
    href= "https://www.linkedin.com/in/jose-bautista-271b98148/"
    target = "_blank"
    rel="noopener noreferrer"

    >
    Check out my LinkedIn!
    </a>

    <a
    className = "Website-Links"
    href= "https://www.linkedin.com/in/jose-bautista-271b98148/"
    target = "_blank"
    rel="noopener noreferrer"

    >
    My Contact Info
    </a>
   </header> 
            </div>
           
        )
    }

}

export default Frontpage;