import React from 'react'
import { Button, Container, Form, Modal, Icon, Message, Divider, Segment, Checkbox } from 'semantic-ui-react'
import registerService from '../services/register'
import Terms from './Terms'

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
            emailError: false,
            errorMessage: '',
            success: false,
            showTerms: false,
            accepted: false,
            showInSearch: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.clearErrors = this.clearErrors.bind(this)
        //this.toggleTerms = this.toggleTerms.bind(this)
        //this.acceptTerms = this.acceptTerms.bind(this)
        //this.declineTerms = this.declineTerms.bind(this)
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
    }

    clearErrors() {
        this.setState({
            usernameError: false,
            passwordError: false,
            emailError: false,
            errorMessage: '',
            success: false
        })
    }

    toggleShowInSearch = () => {
        this.setState({ showInSearch: !this.state.showInSearch })
    }

    toggleTerms = () => {
        this.setState({ showTerms: !this.state.showTerms })
    }
    
    acceptTerms = () => {
        this.setState({ showTerms: false, accepted: true })
    }

    declineTerms = () => {
        this.setState({ showTerms: false, accepted: false })
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
                showInSearch: this.state.showInSearch
            }

            try { 
                const response = await registerService.register(newUser)

                if (response.error) {
                    const invalidField = response.error.split(' ')[1]
                    switch(invalidField){
                        case 'username.':
                            this.setState({usernameError: true}); break
                        case 'email.':
                            this.setState({emailError: true}); break
                        case 'password.':
                            this.setState({passwordError: true}); break
                        default:
                            console.log(response.error)
                    }
                    this.setState({errorMessage: response.error})
                } else {
                    console.log(`user ${response.username} created!`)
                    this.setState({success: true})
                    this.props.autofill(this.state.username, this.state.password1)
    
                    setTimeout(() => {
                        this.handleClose()
                    }, 3000)
                }    
            } catch (error) {
                this.setState({errorMessage: 'Server error.'})
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
                            error={this.state.emailError}
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

                        <Divider />
                        <Checkbox
                            label='Show me in user search'
                            onChange={this.toggleShowInSearch}
                            checked={this.state.showInSearch} />
                        <Divider />

                        
                        {this.state.accepted ? <Icon color='green' name='check circle' size='large'/> : <Icon name='circle outline' size='large'/> }
                        
                        <Button onClick={this.toggleTerms}>Terms of Use and Privacy Statement</Button>
                        
                        <Container>
                            <Divider hidden />
                            <Segment hidden={!this.state.showTerms}>
                                <Terms /> 
                                <Divider hidden />
                                <Button onClick={this.acceptTerms} color='blue'>
                                    I understand and accept.
                                </Button>
                                <Button onClick={this.declineTerms}>
                                    I do not accept.
                                </Button>
                            </Segment>
                        </Container>

                        <Divider />

                        <Message color='red' hidden={this.state.errorMessage === ''}>
                            {this.state.errorMessage}
                        </Message>

                        <Message color='green' hidden={!this.state.success}>
                            New account "{this.state.username}" created!
                        </Message>


                        <Button disabled={!this.state.accepted} type='submit' color='blue' onClick={this.handleSubmit}>Register</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateAccount