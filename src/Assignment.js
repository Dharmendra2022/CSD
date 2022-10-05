import React from "react";
import "./Assignment.css";

//class Subject extends React.Component{
    const Assignment = (props)=>{
    const num=[1,2,3,4,5];
    console.log(num);

    
        return(
            <div className="notes">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download notes</p>
                <div className="sub">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={props.name+"/assignment/Assign-"+data+".pdf"} target="_blank" >Assignment-{data}</a></div>
                    
                       )
                    }
                    )}

                </div>
                
               
            </div>
        )
    
}

export default Assignment;