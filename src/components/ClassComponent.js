import React, {Component} from 'react';

class ClassComponent extends Component {
    render() {
        return(
            <h2>
                My email is {this.props.email}
            </h2>
        )
    }
}

export default ClassComponent;