import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import jdenticon from 'jdenticon'

class UserCard extends React.Component {
    render() {
        const user = this.props.user
        const jdenticonSvg = jdenticon.toSvg(user._id, 150)

        return (
            <Card>
                <div align='center' dangerouslySetInnerHTML={{ __html: jdenticonSvg }} />
                <Card.Content>
                    <Card.Header>{user.firstname} {user.lastname}</Card.Header>
                    <Card.Meta>
                        @{user.screenname}
                    </Card.Meta>
                    <Card.Description>Email: {user.email}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        No friends
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCard