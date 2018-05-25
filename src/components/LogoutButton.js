import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

class LogoutButton extends React.Component {

    handleLogout(event) {
        window.localStorage.setItem('loggedUser', '')
        window.location.reload()
    }

    render() {
        return <Button icon labelposition = 'left' onClick = {this.handleLogout} >
                <Icon name='sign out' />
                Sign out
            </Button>
    }
}

export default LogoutButton
