import React from 'react'
import Task from './Task'
import { Grid, Segment, Message } from 'semantic-ui-react'
import Header from './Header'
import CreateTask from './CreateTask'
import RemoveTaskList from './RemoveTaskList'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Message hidden>
                    Notification stub
                </Message>
                <Grid stackable columns='1'>

                    {this.props.taskLists && this.props.taskLists.map(taskList =>
                        <Grid.Column key={taskList._id}>

                            <Segment key={taskList._id} color={taskList.color || 'grey'}>
                                <h1>{taskList.title}<CreateTask tasklist={taskList._id} /><RemoveTaskList tasklist={taskList._id} /></h1>
                            </Segment>

                            {this.props.tasks.filter(x => x.tasklist === taskList._id).map(item =>
                                <Task
                                    key={item._id}
                                    task={item} />)}
                        </Grid.Column>
                    )}

                    {this.props.tasks.filter(x => !x.tasklist).map(item =>
                        <Task
                            key={item._id}
                            task={item} />)}
                </Grid>

            </div>
        )
    }
}

export default MainView
