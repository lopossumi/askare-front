import React from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import CreateTasklist from './CreateTasklist'
import CreateTask from './CreateTask'
import EditAccount from './EditAccount'
import DeleteAccount from './DeleteAccount'
import LogoutButton from './LogoutButton'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import { connect } from 'react-redux'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <Menu stackable>
                    <Menu.Item as={Link} to='/'>
                        <Icon name='list' /> askare
                    </Menu.Item>

                    <Menu.Item>
                        <Filter />
                    </Menu.Item>
                    
                    <Menu.Menu>
                        <Dropdown item text='New...'>
                            <Dropdown.Menu>
                                <Dropdown.Item><CreateTasklist mode='text' /></Dropdown.Item>
                                <Dropdown.Item><CreateTask mode='text' /></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Dropdown item text='My account'>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/userinfo'>Info</Dropdown.Item>
                                <Dropdown.Item><EditAccount user={this.props.user} mode='text' /></Dropdown.Item>
                                <Dropdown.Item><DeleteAccount /></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <LogoutButton />
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
                <br />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    null
)(Navbar)