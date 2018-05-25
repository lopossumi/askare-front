import React from 'react'
import Task from './Task'
import { Grid, Segment, Label } from 'semantic-ui-react'
import Header from './Header'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid stackable columns='2'>

                    {this.props.taskLists && this.props.taskLists.map(taskList =>
                            <Grid.Column key={taskList.id}>
                                <Segment>
                                    <Label attached='top' color={taskList.color}>{taskList.title}</Label>
                                    {taskList.tasks.map(item =>
                                        <Task
                                            key={item.id}
                                            task={item} />)}
                                </Segment>
                            </Grid.Column>
                    )}
                </Grid>

            </div>
        )
    }
}

export default MainView
