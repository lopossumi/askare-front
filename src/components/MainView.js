import React from 'react'
import Task from './Task'
import { Segment, Message, Container, Divider } from 'semantic-ui-react'
import Header from './Header'
import CreateTask from './CreateTask'
import DeleteTasklist from './DeleteTasklist'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Message hidden>
                    Notification stub
                </Message>

                    {this.props.tasklists && this.props.tasklists.map(tasklist =>
                        <Container hidden={tasklist.recycled}>
                            <Segment key={tasklist._id} color={tasklist.color || 'grey'}>
                                <h1>{tasklist.title}<CreateTask tasklist={tasklist._id} /><DeleteTasklist tasklist={tasklist._id} /></h1>
                            </Segment>
                            {this.props.tasks.filter(x => x.tasklist === tasklist._id).map(item =>
                                <Task
                                    key={item._id}
                                    task={item} />)}
                        <Divider section hidden/>
                        </Container>
                    )}

                    {this.props.tasklists==false && 
                        <div />
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
