import React from 'react'
import Header from './Header'
import { Table, Header as THeader } from 'semantic-ui-react'

class UserInfo extends React.Component {
    render() {
        const user = this.props.user
        return (
            <div>
                <Header />
                <h1>My account information</h1>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <THeader>
                                    <THeader.Content>
                                        {user.firstname} {user.lastname}
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