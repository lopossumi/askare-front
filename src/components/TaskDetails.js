import { Container, Segment, Divider, Label } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'

class TaskDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    detailStyle = {
        textAlign: 'justify',
        opacity: 1,
        transition: 'opacity 500ms ease-in'
    }

    render() {
        return (
            <div style={this.detailStyle}>
                <ReactMarkdown source={this.props.task.content} />
                <Divider />
                <p>Priority: {this.props.task.priority}</p>
                <p>Status: {this.props.task.status}</p>
            </div>
        )
    }
}

export default TaskDetails