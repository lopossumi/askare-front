import React from 'react'
import { Button, Checkbox, Form, Modal, Icon } from 'semantic-ui-react'

const options = [
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'o', text: 'Other', value: 'other' }
]

const submitHandler = () => {
    console.log("Foo")
}

const CreateAccount = () => (

    <Modal trigger={
        <Button
            color='green'
            icon='user'
            content='Sign me up!'
            labelPosition='left' />}>

        <Modal.Header color='blue'><Icon name='user' />Create a new account</Modal.Header>
        <Modal.Content>
            <CreateAccountForm />
        </Modal.Content>
    </Modal>
)

const CreateAccountForm = () => (
    <Form>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Pick a username' />
        </Form.Field>

        <Form.Group widths='equal'>
            <Form.Input fluid
                label='First Name'
                placeholder='First Name' />
            <Form.Input fluid
                label='Last Name'
                placeholder='Last Name' />
            <Form.Select fluid
                label='Gender'
                options={options}
                placeholder='Gender' />
        </Form.Group>

        <Form.Input
            label='E-mail'
            type='email'
            placeholder='you@example.com' />

        <Form.Input
            label='Enter password'
            type='password'
            placeholder='Create a password' />
        <Form.Input
            label='Repeat password'
            type='password'
            placeholder='Repeat password' />

        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions.' />
        </Form.Field>
        <Button type='submit' onClick={submitHandler}>Submit</Button>
    </Form>
)

export default CreateAccount