import React from 'react'
import { Button, Checkbox, Form, Modal, Icon } from 'semantic-ui-react'
import registerService from '../services/register'

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password1: '',
            password2: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        if (this.state.password1 === this.state.password2) {
            const newUser = {
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password1,
            }

            const response = await registerService.register(newUser)
            if (response.error) {
                console.log(response.error)
            } else {
                console.log(`user ${response.username} created! close modal and show message.`)
                this.handleClose()
            }
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={
                    <Button
                        color='green'
                        icon='user'
                        content='Sign me up!'
                        labelPosition='left'
                        onClick={this.handleOpen} />
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='user' />Create a new account</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input
                                placeholder='Pick a username'
                                name='username'
                                onChange={this.handleInputChange}
                                value={this.state.username} />
                        </Form.Field>

                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                label='First Name'
                                placeholder='First Name'
                                name='firstname'
                                onChange={this.handleInputChange}
                                value={this.state.firstname} />
                            <Form.Input fluid
                                label='Last Name'
                                placeholder='Last Name'
                                name='lastname'
                                onChange={this.handleInputChange}
                                value={this.state.lastname} />
                        </Form.Group>

                        <Form.Input
                            label='E-mail'
                            type='email'
                            placeholder='you@example.com'
                            name='email'
                            onChange={this.handleInputChange}
                            value={this.state.email} />

                        <Form.Input
                            label='Enter password'
                            type='password'
                            placeholder='Create a password'
                            name='password1'
                            onChange={this.handleInputChange}
                            value={this.state.password1} />
                        <Form.Input
                            label='Repeat password'
                            type='password'
                            placeholder='Repeat password'
                            name='password2'
                            onChange={this.handleInputChange}
                            value={this.state.password2} />

                        <Form.Field>
                            <Checkbox label='I agree to any Terms and Conditions.' />
                        </Form.Field>
                        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateAccount