import React from "react";
import "./notes.css";
//class Subject extends React.Component{
    const Notes = (props)=>{
    const num=[1,2,3,4,5];
    console.log(num);

    
        return(
            <div className="notes">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download MCQ based Questions</p>
                <div className="sub">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={props.name+"/mcqs/Set-"+data+".pdf"} target="_blank" >Set-{data}</a></div>
                    
                       )
                    }
                    )}
                    
                </div>
                
                
            </div>
        )
    
}

export default Notes;