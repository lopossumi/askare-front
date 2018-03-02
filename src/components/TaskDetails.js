import { Container, Segment, Divider, Label, Transition } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PriorityIcon from './PriorityIcon'

class TaskDetails extends React.Component {
    detailStyle = {
        textAlign: 'left',
    }

    render() {
        const task = this.props.task
        return (
            <Transition visible={this.props.show} animation='slide down' duration={300}>
            <div style={this.detailStyle}><ReactMarkdown source={this.props.task.content} />
                <Divider />
                <p>Priority: <PriorityIcon priority={task.priority} /></p>
                <p>Status: {this.props.task.status}</p>
            </div>
            </Transition>
        )
    }
}



export default TaskDetails