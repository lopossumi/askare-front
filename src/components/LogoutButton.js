import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

class LogoutButton extends React.Component {

    handleLogout(event) {
        window.localStorage.setItem('loggedUser', '')
        window.location.reload()
    }

    render() {
        return <Button onClick={this.handleLogout}>
            <Button.Content visible>
                <Icon name='sign out' />Logout
            </Button.Content>

        </Button>
    }
}

export default LogoutButton
