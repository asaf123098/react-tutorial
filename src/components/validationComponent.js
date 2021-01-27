import React from 'react';


const validationComponent = (props) => {
    let message;
    if (props.length < 5) {
        message = "OOhhhhhh daimn text too short";
    }
    else {
        message = "Good job. text is long enough";
    }
    return <div style={props.style}>{message}</div>;
};

export default validationComponent;