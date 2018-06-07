import React from 'react'
import { Button, Checkbox, Form, Modal, Icon, Message } from 'semantic-ui-react'
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

            usernameError: false,
            passwordError: false,
            errorMessage: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.clearErrors = this.clearErrors.bind(this)

    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
    }

    clearErrors() {
        this.setState({
            usernameError: false,
            passwordError: false,
            errorMessage: '',
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.clearErrors()
        if (this.state.password1 !== this.state.password2) {
            this.setState({passwordError: true, errorMessage: 'Passwords do not match.'})
        } else {
            const newUser = {
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password1,
            }

            const response = await registerService.register(newUser)
            if (response.error) {
                switch(response.error){
                    case 'Insufficient password length':
                        this.setState({passwordError: true}); break
                    case 'Username already taken':
                        this.setState({usernameError: true}); break
                    default:
                        console.log('Didnt get it.', response.error)
                }
                this.setState({errorMessage: response.error})
            } else {
                console.log(`user ${response.username} created!`)
                this.handleClose()
            }
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => {
        this.setState({ modalOpen: false })
        this.clearErrors()
    }

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
                        <Form.Input
                            error={this.state.usernameError}
                            label='Username'
                            placeholder='Pick a username'
                            name='username'
                            onChange={this.handleInputChange}
                            value={this.state.username} />

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
                            error={this.state.passwordError}
                            label='Enter password'
                            type='password'
                            placeholder='Create a password'
                            name='password1'
                            onChange={this.handleInputChange}
                            value={this.state.password1} />
                        <Form.Input
                            error={this.state.passwordError}
                            label='Repeat password'
                            type='password'
                            placeholder='Repeat password'
                            name='password2'
                            onChange={this.handleInputChange}
                            value={this.state.password2} />

                        <Form.Field>
                            <Checkbox label='I agree to any Terms and Conditions.' />
                        </Form.Field>

                        <Message color='red' hidden={this.state.errorMessage === ''}>
                            {this.state.errorMessage}
                        </Message>

                        <Button type='submit' color='green' onClick={this.handleSubmit}>Register</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateAccount