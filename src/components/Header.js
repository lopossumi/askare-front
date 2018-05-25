import React from 'react'
import { Menu, Dropdown, Button, Icon } from 'semantic-ui-react'
import CreateTaskList from './CreateTaskList'
import LogoutButton from './LogoutButton'

const Header = () => (
    <div>
        <Menu>
            <Menu.Item>
                <CreateTaskList />
            </Menu.Item>

            <Menu.Item>
                Second page
            </Menu.Item>

            <Menu.Menu position='right'>
                <Dropdown item text='My account'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Info</Dropdown.Item>
                        <Dropdown.Item>Edit details</Dropdown.Item>
                        <Dropdown.Item>Remove account</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                    <LogoutButton />
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    </div>
)

export default Header