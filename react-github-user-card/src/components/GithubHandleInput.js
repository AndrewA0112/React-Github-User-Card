import React from 'react'

import githubUsernameRegex from 'github-username-regex'
// import './GithubCard.scss'

class GithubHandleInput extends React.Component {
    constructor() {
        super();
        this.state = {
            handle: ''
        }
    }

    handleChange = event => {
        this.setState({
            handle: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(githubUsernameRegex.test(this.state.handle)){
            this.props.setHandle(this.state.handle)
        }
        else {
            alert(`[ ${this.state.handle} ] isn't a allowed input!`)
            this.setState({
                handle: ''
            })
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.handle} onChange={this.handleChange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default GithubHandleInput;