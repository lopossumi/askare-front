import React from 'react'
import Header from './Header'
import { Table, Header as THeader } from 'semantic-ui-react'
import 'jdenticon'

class UserInfo extends React.Component {
    render() {
        let user = this.props.user
        console.log(user)
        if ( user===null ){
            const loggedUserJSON = window.localStorage.getItem('loggedUser')
            console.log('hep')
            if (loggedUserJSON) {
              user = JSON.parse(loggedUserJSON)
            }
        }
        return (
            <div>
                <Header />
                <h1>My account information</h1>
                <Table collapsing>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <svg width="80" height="80" data-jdenticon-value={user.username}></svg>
                            </Table.Cell>
                            <Table.Cell>
                                <THeader>
                                    <THeader.Content>{user.firstname} {user.lastname}
                                        <THeader.Subheader>@{user.username}</THeader.Subheader>
                                    </THeader.Content>
                                </THeader>
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default UserInfo