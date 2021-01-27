import React from 'react';


const userInputCounter = (props) => {
    return (
    <div style={props.style}>
        <input type="text" onChange={props.changed} value={props.name}/>
        <button onClick={props.setVisibility}>Click me to toggle</button>
    </div>
    );
};

export default userInputCounter;