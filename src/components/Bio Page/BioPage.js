import React, { Component } from 'react';
import logo from '../Images/joseBautista.jpeg';
import '../Bio Page/BioPage.css';
import Pdf from '../Bio Page/Copy of Jose Bautista f Resume 2019.docx 2.pdf'
class BioPage extends Component{





render(){
    return(

        <div >
 

  <body className ="bioPage">

  <img src={logo} className="Front-pic" alt="logo" />
  
  <div>
      <h2>Small Biography About Me</h2>

<div className ="paragraph" id ="section1">
      <p>My name is Jose Bautista from the Washington Heights in New York City, I'm a Computer Science major at Lehman College an aspiring software 
      engineer who's interested in Web Development. I am in search for a full stack internship so I can exceed in improving in each of the 
      programming languages that I would like to use for my programming career. I am also always open to learn new things and like to take on
     new challenges to improve on myself in any way i can so I can contribute as much as I can for my team.
      </p>
      <p>   Aside from that on my spare time I like to travel, working out by going to the gym and going on jogs around the city.
       Kind of a fitness freak since I love eating A LOT, really love food, I enjoy going upstate New York for hikes, and also enjoy 
       skateboarding with my friends in the city and socializing with new people whenever I can.</p>
      </div> 


  </div>
  <div>
  <a className = "RButton" href = {Pdf} target = "_blank">Take A Look At My Resume</a>
 </div>

 
   </body> 
   
 
  
</div>
    )
}

}

export default BioPage;