import React from 'react'
import { Container } from 'semantic-ui-react'
import { Icon, Segment, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router } from 'react-router-dom'
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import CreateAccount from './components/CreateAccount'
import TaskDetails from './components/TaskDetails'

const myTask1 = {
    id: '9872344324',
    title: 'My first task title',
    content: 'This is a markdown flavoured thing.\n## Second level header\nLorem ipsum.\n### Third level header\nsuch is cool wow',
    priority: 4,
    status: 3,
    list: '8273'
}

const myTask2 = {
    id: '918346722',
    title: 'my second task title',
    content: '# baz ## lol',
    priority: 2,
    status: 2,
    list: '8273'
}

const myTaskList = {
    id: '8273',
    tasks: [
        myTask1,
        myTask2
    ],
    title: 'My tasklist',
    owner: 'teppo'
}

const myUser = {
    taskLists: [
        8273
    ],
    username: 'teppo',
    firstName: 'Teppo',
    lastName: 'Testi'
}

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

            {myTaskList.tasks.map(item =>
                <TaskDetails
                    key={item.id}
                    task={item}
                    color='blue' />)}

            <Divider />
            &copy; Mikko Loponen 2018. <a href='https://github.com/lopossumi/askareact'>View source on GitHub.</a>
        </Container>
    </Router>
)

export default App