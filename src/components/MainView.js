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
                            
                                <Segment key={taskList._id} color={taskList.color || 'grey'}>
                                <h1>{taskList.title}<CreateTask tasklist={taskList._id}/></h1>
                                
                            </Segment>
                            {this.props.tasks.filter(x => x.tasklist===taskList._id).map(item =>
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
