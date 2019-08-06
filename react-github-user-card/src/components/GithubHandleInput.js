import React from 'react'

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
        this.props.setHandle(this.state.handle)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default GithubHandleInput;