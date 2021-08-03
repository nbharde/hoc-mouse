import React from 'react';
import ChildComponent from './Child';

const ParentComponent = (props) => {
    return (
        <div className="parent-container">
            <h2>Parent Component</h2>
            <ChildComponent />
        </div>
    )
};

export default ParentComponent;
