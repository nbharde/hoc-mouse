import React, { Component } from 'react';

const withHover = (WrappedComponent) => {
    return class extends Component {
        state = {
            hover: false
        }
        onMouseOver = () => {
            this.setState({hover: true});
        }
        onMouseOut = () => {
            this.setState({hover: false});
        }
        render() {
            return <WrappedComponent onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...this.props} hover={this.state.hover}/>
        }
    }
};

export default withHover;
