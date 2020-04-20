import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ( { user: { login, avatar_url, html_url } } ) => {
    return (
        <div>
            <div className="card text-center">
                <img className="round-img" src={avatar_url} style={{ width: "40px" }} alt=""></img>
                <h3 className="text-center">{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">More</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
