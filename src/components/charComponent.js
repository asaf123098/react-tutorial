import React from 'react';


const charComponent = (props) => {
    return (
    
    <div style={{"display": "inline-block", "padding": "16px", "textAlign": "center",
    "margin": "16px", "border": "1px solid black"}} onClick={props.clicked}>
        {props.char}
    </div>
    );
};

export default charComponent;