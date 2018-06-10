import React from 'react'
import Header from './Header'
import { Table, Header as THeader } from 'semantic-ui-react'
import jdenticon from 'jdenticon'

class UserInfo extends React.Component {
    render() {
        let user = this.props.user
        if ( user===null ){
            const loggedUserJSON = window.localStorage.getItem('loggedUser')
            if (loggedUserJSON) {
              user = JSON.parse(loggedUserJSON)
            }
        }
        const jdenticonSvg = jdenticon.toSvg(user._id, 100)

        return (
            <div>
                <Header />
                <h1>My account information</h1>
                <Table collapsing>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <div dangerouslySetInnerHTML={{__html: jdenticonSvg}} />

                            </Table.Cell>
                            <Table.Cell>
                                <THeader>
                                    <THeader.Content>{user.firstname} {user.lastname}
                                        <THeader.Subheader>@{user.screenname}</THeader.Subheader>
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