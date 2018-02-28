import React from 'react'
import { Container } from 'semantic-ui-react'
import { Icon, Segment, Divider, Label } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import CreateAccount from './components/CreateAccount'
import TaskDetails from './components/TaskDetails'

import { connect } from 'react-redux'
import { initialize } from './reducers/taskListReducer'

const myUser = {
    taskLists: [
        8273
    ],
    username: 'teppo',
    firstName: 'Teppo',
    lastName: 'Testi'
}

class App extends React.Component {
    componentDidMount = async () => {
        console.log('trying to initialize')
        this.props.initialize()
    }

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Route exact path='/' render={() =>
                            <Container>
                                <Segment raised padded>
                                    <h1><Icon name='list' />askare</h1>
                                    <p>Revolutionizing to-do lists. Join today!</p>
                                    <CreateAccount />
                                </Segment>
                                <LoginForm />
                            </Container>} />


                        <Route path='/tasklists' render={() =>
                            <Container>
                            {this.props.taskLists && this.props.taskLists.map(taskList=> 
                            <Segment>
                                <Label attached='top'>{taskList.title}</Label>
                                {taskList.tasks.map(item =>
                                    <TaskDetails
                                        key={item.id}
                                        task={item}
                                color='blue' />)}
                            </Segment>)}
                            </Container>
                        } />
                    </div>
                </Router>

                <Footer />
            </Container>
        )
    }
}

const Footer = () => (
    <div>
        <Divider />
        <Icon name='list' />askare &copy; Mikko Loponen 2018. < a href='https://github.com/lopossumi/askareact' > View source <Icon name='github' />GitHub.</a >
    </div>
)

const mapStateToProps = (state) => {
    return {
        taskLists: state.taskLists,
    }
}

export default connect(
    mapStateToProps,
    { initialize }
)(App)
