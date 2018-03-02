import { Container, Segment, Divider, Label } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PriorityIcon from './PriorityIcon'

class TaskDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDetails: false }
    }

    detailStyle = {
        textAlign: 'justify',
        opacity: 1,
        transition: 'opacity 500ms ease-in'
    }

    render() {
        const task = this.props.task
        return (
            <div style={this.detailStyle}><ReactMarkdown source={this.props.task.content} />
                <Divider />
                <p>Priority: <PriorityIcon priority={task.priority} /></p>
                <p>Status: {this.props.task.status}</p></div>
        )
    }
}


export default TaskDetails