import React from 'react'
const RepoItem = ({repo}) => {
    
    const {html_url, name} = repo
    
    return (
        <div className="card">
            <a href={html_url}>{name}</a>
        </div>
    )
}

export default RepoItem
