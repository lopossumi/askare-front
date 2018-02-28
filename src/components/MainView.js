import React from 'react'
import TaskDetails from './TaskDetails'
import { Container, Segment, Label } from 'semantic-ui-react'

class MainView extends React.Component {
    render() {
        return (
            <Container>
                {this.props.taskLists && this.props.taskLists.map(taskList =>
                    <Segment key={taskList.id}>
                        <Label attached='top' color={taskList.color}>{taskList.title}</Label>
                        {taskList.tasks.map(item =>
                            <TaskDetails
                                key={item.id}
                                task={item}/>)}
                    </Segment>)
                }
            </Container>
        )
    }
}

export default MainView
