import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

class LogoutButton extends React.Component {

    handleLogout(event) {
        window.localStorage.setItem('loggedUser', '')
        window.location.reload()
    }

    render() {
        return <Button animated color='black' onClick={this.handleLogout}>
            <Button.Content hidden>Logout</Button.Content>
            <Button.Content visible>
                <Icon name='sign out' />
            </Button.Content>

        </Button>
    }
}

export default LogoutButton
