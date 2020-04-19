import React, { Component } from 'react';
import logo from '../Images/joseBautista.jpeg';
import '../Bio Page/BioPage.css';
class BioPage extends Component{



render(){
    return(

        <div >
  <section id="1">

  <body className ="bioPage">

  <img src={logo} className="Front-pic" alt="logo" />

  <div>
      <h2>Small Biography About Me</h2>

      <p>My name is Jose Bautista from New York City, 
I'm a Computer Science major at Lehman College an aspiring software engineer who's interested in Web Development. 
I currently have experience in Java, JavaScript, HTML, CSS and Python. I am in search for a full stack internship
so I can exceed in improving in each of the programming languages that I would like to use for my programming career. 
I am also always open to learn new things and like to take on new challenges to better myself so I can contribute as much
as I can for my team.</p>
  </div>
  
   </body> 
   
   </section>
  
</div>
    )
}

}

export default BioPage;