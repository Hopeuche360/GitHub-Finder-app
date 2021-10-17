import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'Hopeuche360',
                avatar_url: 'https://avatars.githubusercontent.com/u/22015810?v=4',
                html_url: 'https://github.com/Hopeuche360'
            },
            {
                id: '2',
                login: 'Tobi-java',
                avatar_url: 'https://avatars.githubusercontent.com/u/85926751?v=4',
                html_url: 'https://github.com/Tobi-java'
            },
            {
                id: '3',
                login: 'dizart',
                avatar_url: 'https://avatars.githubusercontent.com/u/55360356?v=4',
                html_url: 'https://github.com/dizsart'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
    }

export default Users
