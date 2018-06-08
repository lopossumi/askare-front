import React from 'react'
import { Button, Form, Container, Segment, Icon, Message, Loader } from 'semantic-ui-react'
import CreateAccount from './CreateAccount'
import loginService from '../services/login'
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer'
import { initialize } from '../reducers/tasklistReducer'

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

            errorMessage: '',
            connecting: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.autofill = this.autofill.bind(this)
    }

    autofill(username, password) {
        this.setState({ username, password })
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        console.log('attempting login:')
        this.setState({connecting: true})
        const user = await loginService
            .login({
                username: this.state.username,
                password: this.state.password
            })
        this.setState({connecting: false})

        if (user.error) {
            this.setState({errorMessage: user.error})
        } else if (!user.username) {
            this.setState({errorMessage: 'Invalid response from server. User not logged in.'})
        } else {
            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            this.props.login(user)
            this.props.initialize(user)
            this.props.history.push('/') 
        }
    }

    render() {
        return (
            <Container>
                <Segment raised padded>
                    <h1><Icon name='list' />askare</h1>
                    <p>Revolutionizing to-do lists. Join today!</p>
                    <CreateAccount autofill={this.autofill} />
                </Segment>

                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Username or e-mail'
                            placeholder='Enter your username or e-mail' 
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}/>

                        <Form.Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password' 
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Message color='red' hidden={this.state.errorMessage===''}>
                        {this.state.errorMessage}
                    </Message>

                    <Button
                        type='submit'
                        disabled={this.state.username===''}
                        color='blue'
                        icon='sign in'
                        content='Sign in'
                        labelPosition='left' 
                        onClick={this.handleSubmit} />
                </Form>
                
                <Loader active={this.state.connecting}>Connecting...</Loader>
            </Container>
        )
    }
}

//export default LoginView

export default connect(
    null,
    { login, initialize }
)(LoginView)
