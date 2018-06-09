import React from 'react'
import Task from './Task'
import { Segment, Message, Container, Divider } from 'semantic-ui-react'
import Header from './Header'
import CreateTask from './CreateTask'
import EditTasklist from './EditTasklist'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Message hidden>
                    Notification stub
                </Message>

                    {this.props.tasklists && this.props.tasklists.map(tasklist =>
                        <Container key={tasklist._id}>
                            <Segment key={tasklist._id} color={tasklist.color || 'grey'}>
                                <h1>{tasklist.title}<CreateTask tasklist={tasklist._id} /><EditTasklist tasklist={tasklist} /></h1>
                            </Segment>
                            {this.props.tasks.filter(x => x.tasklist === tasklist._id).map(item =>
                                <Task
                                    key={item._id}
                                    task={item} />)}
                        <Divider section hidden/>
                        </Container>
                    )}

                    {this.props.tasklists.length===0 && 
                        <Message info>
                        <Message.Header>You do not have any task lists yet.</Message.Header>
                        <p>Click on the <b>Create new list</b> button to start.</p>
                        </Message>
                    }

                    {this.props.tasks.filter(x => !x.tasklist).map(item =>
                        <Task
                            key={item._id}
                            task={item} />)}

            </div>
        )
    }
}

export default MainView
