import React from 'react'
import { Button, Checkbox, Divider, Form, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { editUser, login } from '../../reducers/userReducer'
import userService from '../../services/user'

class AccountEditForm extends React.Component {
    constructor(props) {
        super(props);

        if (props.mode === 'create') {
            this.state = {
                mode: 'create',
                errorMessage: '',
            }
        } else {
            this.state = {
                // Fill all fields from props.user
                ...props.user,

                mode: 'edit',
                errorMessage: '',
                currentpassword: '',
                password1: '',
                password2: '',

                // Validation errors
                currentPasswordError: false,
                usernameError: false,
                passwordError: false,
                emailError: false,
                success: false,
            }
        }
        this.clearErrors = this.clearErrors.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    clearErrors() {
        this.setState({
            usernameError: false,
            currentPasswordError: false,
            passwordError: false,
            emailError: false,
            errorMessage: '',
            success: false
        })
    }

    toggleShowInSearch = () => {
        this.setState({ showInSearch: !this.state.showInSearch })
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.clearErrors()

        //region Client side form validation
        let clientSideValidationOK = true
        const usernameRegex = /^[a-zA-Z0-9_-]+$/
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (this.state.password1 !== this.state.password2) {
            clientSideValidationOK = false
            this.setState({
                passwordError: true,
                errorMessage: 'Passwords do not match.'
            })
        }
        if (!this.state.email.match(emailRegex)) {
            clientSideValidationOK = false
            this.setState({
                emailError: true,
                errorMessage: 'Invalid email. Please enter a valid email address.'
            })
        }
        if (!this.state.username.match(usernameRegex)) {
            clientSideValidationOK = false
            this.setState({
                usernameError: true,
                errorMessage: 'Invalid username. Please use only english alphanumeric characters, hyphen and underscore.'
            })
        }
        //endregion Client side form validation

        if (clientSideValidationOK) {
            const newUser = {
                _id: this.state._id,
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                currentpassword: this.state.currentpassword,
                password: this.state.password1,
                showInSearch: this.state.showInSearch
            }

            try {
                userService.setToken(this.props.user.token)
                const response = await userService.edit(newUser)

                // Check server side validation errors
                if (response.error) {
                    const invalidField = response.error.split(' ')[1]
                    switch (invalidField) {
                        case 'username.': this.setState({ usernameError: true }); break
                        case 'email.': this.setState({ emailError: true }); break
                        case 'password.': this.setState({ currentPasswordError: true }); break
                        case 'new': this.setState({ passwordError: true }); break
                        default:
                            console.log(response.error)
                    }
                    this.setState({ errorMessage: response.error })
                } else {
                    // Server side validation ok.
                    this.setState({ success: true })
                    console.log(response)
                    window.localStorage.setItem('loggedUser', JSON.stringify(response))
                    this.props.login(response)

                    setTimeout(() => {
                        this.props.handleClose()
                    }, 2000)
                }
            } catch (error) {
                this.setState({ errorMessage: 'Server error.' })
                console.log(error)
            }
        }
    }

    render() {

        return (
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
                    error={this.state.currentPasswordError}
                    label='Current password'
                    type='password'
                    placeholder='Type your current password'
                    name='currentpassword'
                    onChange={this.handleInputChange}
                    value={this.state.currentpassword} />

                <Form.Input
                    error={this.state.passwordError}
                    label='New password'
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

                <Message color='red' hidden={this.state.errorMessage === ''}>
                    {this.state.errorMessage}
                </Message>

                <Message color='green' hidden={!this.state.success}>
                    Account details saved!
                </Message>

                <Button type='submit' color='blue' onClick={this.handleSubmit}>Save</Button>
                <Button onClick={this.props.handleClose}>Cancel</Button>
            </Form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
    { editUser, login }
)(AccountEditForm)