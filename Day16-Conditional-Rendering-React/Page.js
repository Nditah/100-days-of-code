import React, { Component } from 'react'

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div className="section">
                <WarningBanner warn={this.state.showWarning} className="warning"/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default Page
