import React from 'react'
import Task from './Task'
import { Grid, Segment } from 'semantic-ui-react'
import Header from './Header'
import CreateTask from './CreateTask'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid stackable columns='1'>

                    {this.props.taskLists && this.props.taskLists.map(taskList =>
                        <Grid.Column key={taskList._id}>
                            <Segment color={taskList.color}>
                                <h2>{taskList.title}<CreateTask tasklist={taskList._id}/></h2>
                                
                            </Segment>
                            {taskList.tasks.map(item =>
                                    <Task
                                        key={item._id}
                                        task={item} />)}
                        </Grid.Column>
                    )}
                </Grid>

            </div>
        )
    }
}

export default MainView
