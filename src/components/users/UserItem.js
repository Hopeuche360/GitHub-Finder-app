import React from 'react'
import PropTypes from 'prop-types';

function UserItem({user: {login, avatar_url, html_url}}) {
    
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '100px' }} />
            <h3>{login}</h3>
            <a href={html_url} className="btn-primary btn-sm my-1" target="_blank">profile</a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired 
}

export default UserItem
