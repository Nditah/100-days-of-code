import React, { Component } from 'react'

export class FormTest extends Component {
    constructor(props) {
        super(props)
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
             username: '',
             comments: '',
             topic: ''
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentsChange(e) {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange(e) {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit(e) {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        e.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="section">
                <h2>Form Example</h2>
                <div className="label">
                <label>UserName</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}/>
                </div>
                <div className="label">
                    <label>Comments</label>
                    <textarea 
                    value={this.state.comments} 
                    onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div className="label">
                    <label>Topic</label>
                    <select 
                    value={this.state.topic}
                    onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormTest
