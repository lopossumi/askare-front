import React from 'react'
import { Container } from 'semantic-ui-react'
import { Icon, Segment, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router } from 'react-router-dom'
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import CreateAccount from './components/CreateAccount'

const App = () => (
    <Router>
        <Container>
            <Segment raised padded>
                <h1><Icon name='list' />askare</h1>
                <p>Revolutionizing to-do lists. Join today!</p>
                <CreateAccount />
            </Segment>

            <LoginForm />

            <Divider />
            &copy; Mikko Loponen 2018. <a href='https://github.com/lopossumi/askareact'>View source on GitHub.</a>
        </Container>
    </Router>
)

export default App