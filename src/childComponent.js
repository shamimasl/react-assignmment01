import React, { useState } from "react"

const ChildComponent =(props)=>{
    const [show,setShow]=useState(false)
    return(
        <div>
           {
             show?<p>
             Name: {props.info[0]}<br></br>
             Age: {props.info[1]}<br></br>
             Country: {props.info[2]}<br></br>
         </p>:null

        
           }
            <button onClick={()=>setShow(true)}>Show</button>
         <button onClick={()=>setShow(false)}>Hide</button>

        </div>
    )
}

export default ChildComponent