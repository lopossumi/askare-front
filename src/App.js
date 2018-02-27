import React from 'react'
import { Container } from 'semantic-ui-react'
import { Button, Icon, Link } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
    <Router>
    <Container>
        <h1>Askare</h1>
        <Button color='green'>Create account</Button>
        <Button color='blue'>Login</Button>
        <a href='https://github.com/lopossumi/askareact'><Button color='purple'> {/*Github purple is #6e5494 */}
        <Icon name='github' /> Source on GitHub
      </Button></a>
    </Container>
    </Router>
)
  
export default App