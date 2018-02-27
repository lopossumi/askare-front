import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const LoginForm = () => (
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
)

export default LoginForm