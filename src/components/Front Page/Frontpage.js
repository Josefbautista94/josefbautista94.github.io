import React, { Component } from 'react';
import './Frontpage.css';
import {Link} from 'react-router-dom';
class Frontpage extends Component{
    constructor(props){
        super(props)
        this.state ={

        }


       
    }

    render(){
        return(
            
            
            <div >
    
    
    
   <header className="Main-content">
   <h1> Welcome To My Own Personal Website </h1>
<Link to="/Bio-Page">
    <button className ="Buttons"> Bio</button>
    </Link>
      </header> 

   
           
            </div>

            
           
        )
    }

}

export default Frontpage;