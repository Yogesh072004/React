import React from "react";
function HelloMessage(props){
    // props.name="mohan" =>immutable
    return(
       <div>
        <h1>
            Hello {props.name} and age is {props.age}
            {props.children}
        </h1>
       </div>
    );
}
export default HelloMessage ;