import React from 'react'
import Task from './Task'
import { Grid, Segment, Label } from 'semantic-ui-react'

class MainView extends React.Component {
    render() {
        return (
            <Grid stackable columns='3'>

                {this.props.taskLists && this.props.taskLists.map(taskList =>
                    <Grid.Column key={taskList.id}>
                        <Segment>
                            <Label attached='top' color={taskList.color}>{taskList.title}</Label>
                            {taskList.tasks.map(item =>
                                <Task
                                    key={item.id}
                                    task={item} />)}
                        </Segment>
                    </Grid.Column>)
                }
            </Grid>
        )
    }
}

export default MainView
