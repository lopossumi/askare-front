import { Divider, Transition } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PriorityIcon from './PriorityIcon'
import RemoveTask from './RemoveTask';

class TaskDetails extends React.Component {
    detailStyle = {
        textAlign: 'left',
    }

    render() {
        const task = this.props.task
        return (
            <Transition visible={this.props.show} animation='slide down' duration={300}>
            <div style={this.detailStyle}><ReactMarkdown source={task.content} />
                <Divider />
                <p>Priority: <PriorityIcon priority={task.priority} /></p>
                <p>Status: {task.status}</p>
                <RemoveTask taskId={task._id}/>
            </div>
            </Transition>
        )
    }
}

export default TaskDetails