import React from 'react';


const Line = props => {
    return (
               <line x1={props.x1} y1={props.y1}
                   x2={props.x2} y2={props.y2}
                   stroke={props.stroke}
                   strokeWidth={props.strokeWidth}
               />
    );
}

export default Line;