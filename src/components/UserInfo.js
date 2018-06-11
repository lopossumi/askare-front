import React from 'react'
import Navbar from './Navbar'
import UserCard from './UserCard'
import { Container } from 'semantic-ui-react'

class UserInfo extends React.Component {
    render() {
        let user = this.props.user
        if (user === null) {
            const loggedUserJSON = window.localStorage.getItem('loggedUser')
            if (loggedUserJSON) {
                user = JSON.parse(loggedUserJSON)
            }
        }

        return (
            <Container>
                <Navbar />
                <h1>My account information</h1>
                <UserCard user={user} />
            </Container>
        )
    }
}

export default UserInfo