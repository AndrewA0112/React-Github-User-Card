import React from 'react'

import './GithubFollower.scss'

const GithubFollower = ({profile}) => {
    return (
        <div className='followerContainer'>
            <div className='profileImgContainer'>
                <img src={profile.avatar_url} alt={profile.name}/>
            </div>
            <div className='profileInfoContainer'>
                <h1>{profile.name}</h1>
                <h4>{profile.login}</h4>
                <p>{profile.location}</p>
                <p>Profile URL: <a href={profile.html_url} target='_blank' rel="noopener noreferrer">{profile.html_url}</a></p>
                <p>{profile.followers}</p>
                <p>{profile.following}</p>
                <p>{profile.bio}</p>
            </div>
        </div>
    )
}

export default GithubFollower;