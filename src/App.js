import React from 'react';
import PropTypes from "prop-types"
import "./App.css"

import Subject from './components/Subject';
import {Link} from "react-router-dom";
import Img from "./image1.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./tt.css"
//const App = () =>{
  class App extends React.Component{
 /* constructor(props) {  
    super(props);
    this.state={
      name:"JavaTPoint",
    }
  }
*/

  render(){ 
  return(
    <div>  
     
      
      <div className="header">
        <div className='title'> <h1> GRID Learning Platform</h1></div>
     <div className='navbar'>
        <div className='button'>
          <a href="#" >Home </a>
        </div>
        <div className='button'>
          <a href="/allsubject" >Subject </a>
        </div>

        <div className='button'>
          <a href="#s2" >Lab Manual </a>
        </div>
        <div className='button'>
          <a href="#s3" >Aboutus </a>
        </div>
        <div className='button'>
          <a href="#s4" >Contact us </a>
        </div>

        </div>
      </div>   
      <div className="section">
        <div className="left">
        <div className='button2'>

        <Link to={"/discrete_layout" }>Discrete Mathematics </Link>
        </div>
        <div className='button2'>
        <Link to={"/automata_layout" }>Automata Theory </Link>
          
        </div>
        <div className='button2'>
          <Link to={"/dbms_layout"} >Database Management System </Link>
        </div>
        <div className='button2'>
          <Link to={"/algorithm_layout"} >Design and Analysis of Algorithm </Link>
        </div>
        <div className='button2'>
          <Link to={"/network_layout"} >Computer Network</Link>
        </div>
        
        <div className='button2'>
          <Link to={"/datastructure_layout"} style={{pointerEvents: "none"}} >Data Structure</Link>
        </div>
        <div className='button2'>
          <Link to={"/machine_layout"} style={{pointerEvents: "none"}} >Machine Learning</Link>
        </div>
        </div>

        <div className="center">
        <h1> Computer Science </h1>

      

        </div> 

        <div className="right">
            <div className='button2'>
                <Link to={"/gate_ques" }>GATE Previous Year Question Papers </Link>
            </div>
            <div className='button2'>
                <Link to={"/automata_layout" } style={{pointerEvents: "none"}}>Infosys Recruitment Question Papers</Link> 
            </div>
            <div className='button2'>
                <Link to={"/dbms_layout"} style={{pointerEvents: "none"}} >TCS Recuritment Question Papers</Link>
            </div>
        
        </div> 
      </div>

      <div className='sec2' id="s2">
                  
                      <h1>Lab Manual </h1>

                
                   <div className='lab'>
                  
                   <div>
                        <a href={"/Lab Manual/DBMS.pdf"} target="_blank" >DATABASE </a>
                   </div> 
                   <div>
                        <a href={"/Lab Manual/Algorithm.pdf"} target="_blank" >ALGORITHM </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/DS.pdf"} target="_blank" >DATA STRUCTURE </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/Webtech.pdf"} target="_blank" >WEB TECHNOLOGY </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/python.pdf"} target="_blank" >PYTHON PROGRAMMING</a>
                   </div> 
                   <div>
                        <a href={"/Lab Manual/c-pro.pdf"} target="_blank" >C PROGRAMMING </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/discrete.pdf"} target="_blank" >DISCRETE STRUCTURE </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/Compiler.pdf"} target="_blank" >COMPILER DESIGN </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/dld.pdf"} target="_blank" >DIGITAL LOGIC </a>
                   </div> 
                   <div>
                        <a href={"/Lab Manual/cn.pdf"} target="_blank" >COMPUTER NETWORK </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/co.pdf"} target="_blank" >COMPUTER ORGANIZATIN </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/se.pdf"} target="_blank" >SOFTWARE ENGINEERING </a>
                   </div>
                   <div>
                        <a href={"/Lab Manual/se.pdf"} target="_blank" >OPERATING SYSTEM </a>
                   </div>
                   
                      
                        
                        
                        </div>    
                       
                          

                   
                  
                      
                   
                

      </div>
      <div className='sec3' id="s3">
        <div className="aboutus">
        <h2>AboutUs</h2>
        <h4>
        Dharmendra Kumar is currently working as Associate Professor at the Department of
Computer Science and Engineering, United College of Engineering and Research, Prayagraj, India and pursuing Ph. D. at Dr. A.P.J. Abdul Kalam Technical University, Uttar
Pradesh, Lucknow, India. He received his M. Tech. degree in Software Engineering
from Motilal Nehru National Institute of Technology Allahabad, Prayagraj in 2008, and
M.Sc. degree in Software Engineering from University of Allahabad, Prayagraj, India
in 2001. He is teaching at the United College of Engineering and Research, Prayagraj,
India for about 20 Years. He has taught many core subject papers such as ”Computer Network”, ”Design and Analysis of Algorithms”, ”Data Structure”, ”Database Management
System” and etc. of computer science during his teaching period. His research interests
include Peer-to-Peer Networks, Computer Networks and Machine Learning. The author
has published papers in International Journals including Springer and Inderscience. He is
a NET-qualified scholar. He is also qualified GATE Entrance Examination with rank 573
in 2018.
        </h4>
        </div>
      </div>
      <div className='sec4' id="s4">
        <div>
        <h2>ContactUs</h2><br></br>
        <h4>
          <em>Name:</em> Dharmendra Kumar<br></br>
          <em>E-mail:</em> kumar.dharmendra@rediffmail.com<br></br>
          <em>Mobile No.:</em> 9839047904
        </h4>
        </div>
      </div>

</div>
  )}
  }

export default App;
