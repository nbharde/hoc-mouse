import React from 'react';
import ChildWithHover from './Child';

const ParentComponent = (props) => {
    return (
        <div className="parent-container">
            <h2>Parent Component</h2>
            <ChildWithHover />
        </div>
    )
};

export default ParentComponent;
