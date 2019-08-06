import React from 'react'

import './GithubCard.scss'

const GithubCard = ({profile}) => {
    if(profile.name === 'No profile found'){
        return (
            <div className='profileContainer'>
                <div className='profileInfoContainer'>
                    <h1>{profile.name} under ' <span>{profile.handle}</span> '</h1>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className='profileContainer'>
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
}

export default GithubCard;