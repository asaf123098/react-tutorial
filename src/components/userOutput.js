import React from 'react';


const userOutput = (props) => {
    return (
    <div style={props.style}>
        The amount of chars in the given name ({props.name}),<br/>
        is {props.name.length}
    </div>
    );
};

export default userOutput;