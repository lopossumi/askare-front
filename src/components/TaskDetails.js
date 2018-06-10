import { Divider, Transition, Button } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemoveTask from './RemoveTask'
import EditTask from './EditTask'


class TaskDetails extends React.Component {
    detailStyle = {
        textAlign: 'left',
    }

    render() {
        const task = this.props.task
        return (
            <Transition visible={this.props.show} animation='slide down' duration={300}>
            <div style={this.detailStyle}>
                <Divider />
                <ReactMarkdown source={task.content} />
                <Divider />
                {/* <p>Priority: <PriorityIcon priority={task.priority} /></p>
                <p>Status: {task.status}</p> */}
                <Button.Group size='mini'>
                <EditTask task={task} />
                <RemoveTask taskId={task._id}/>
                </Button.Group>
            </div>
            </Transition>
        )
    }
}

export default TaskDetails