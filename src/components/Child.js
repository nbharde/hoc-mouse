import React, { useState } from 'react';
import withHover from './withHover';

const ChildComponent = (props) => {
    const [textColor, setTextColor] = useState('black');
   
    const changeTextColor = () => {
        setTextColor(textColor === 'black' ? 'red' : 'black')
    }

    return (
        <div {...props}>
            <div className="child-container" onClick={changeTextColor} >
                <label>Child Component</label>
                <p style={{color: textColor}}>{props.hover ? 'Mouse is inside': 'Mouse is outside'}</p>
            </div>
        </div>
    )
};

const ChildWithHover = withHover(ChildComponent)
export default ChildWithHover;
