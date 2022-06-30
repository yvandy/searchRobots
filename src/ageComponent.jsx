import React from 'react';

function AgeValue(props){
    
    if (props.name !== "" && props.age !== 0){     
        return <h1>{props.name} is {props.age} years old ! </h1>
    }
}
export default AgeValue;