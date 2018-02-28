import React from 'react'
import { Button, Form, Container, Segment, Icon } from 'semantic-ui-react'
import CreateAccount from './CreateAccount'

class LoginView extends React.Component {
    render() {
        return (
            <Container>
                <Segment raised padded>
                    <h1><Icon name='list' />askare</h1>
                    <p>Revolutionizing to-do lists. Join today!</p>
                    <CreateAccount />
                </Segment>

                <Form>
                    <Form.Group widths='equal'>

                        <Form.Field>
                            <label>Username or e-mail</label>
                            <input placeholder='Enter your username or e-mail' />
                        </Form.Field>
                        <Form.Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password' />

                    </Form.Group>
                    <Button
                        type='submit'
                        color='blue'
                        icon='sign in'
                        content='Sign in'
                        labelPosition='left' />
                </Form>
            </Container>
        )
    }
}
export default LoginView