import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure comp render');
        return (
            <p>Pure Component {this.props.name}</p>
        )
    }
}

export default PureComp
