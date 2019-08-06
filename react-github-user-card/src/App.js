import React from "react";
import axios from 'axios';

import GithubCard from './components/GithubCard'
import GithubFollower from './components/GithubFollower'
import GithubHandleInput from './components/GithubHandleInput'

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            githubProfile: {},
            githubFollowers: [],
            githubHandle: 'AndrewA0112'
        };
    }

    componentDidMount() {
        this.fetchProfile();
    }

    componentDidUpdate(prevProp, prevState) {
        if(prevState.githubHandle !== this.state.githubHandle){
            this.fetchProfile();
        }
    }

    fetchProfile = () => {
        axios.get(`https://api.github.com/users/${this.state.githubHandle}`)
            .then(response => {
                console.log(response)
                this.setState({
                    githubProfile: response.data
                })
                this.fetchFollowers();
            })
            .catch(err => {
                console.log('User not found!')
                this.setState({
                    githubProfile: {name: 'No profile found', handle: this.state.githubHandle},
                    githubFollowers: []
                })
            })
    }

    fetchFollowers = () => {
        axios.get(`https://api.github.com/users/${this.state.githubHandle}/followers`)
            .then(response => {
                this.setState({
                    githubFollowers: response.data
                })
            })
            .catch(err => {
                console.log('User not found!')
            })
    }

    setHandle = handle => {
        this.setState({
            githubHandle: handle
        })
    }

    render() {
        return (
            <div className="App">
                <GithubHandleInput setHandle={this.setHandle}/>
                <GithubCard profile={this.state.githubProfile} />
                {
                    this.state.githubFollowers.map(follower => {
                        return <GithubFollower profile={follower} key={follower.id}/>
                    })
                }
            </div>
        );
    }
}

export default App;
