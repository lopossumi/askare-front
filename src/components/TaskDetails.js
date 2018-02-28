import { Container, Segment, Divider, Label } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'

class TaskDetails extends React.Component {

    render() {
        return (
            <Container>
                <Segment
                    color={this.props.task.color}>
                    <Label attached='top' color={this.props.task.color}>{this.props.task.title}</Label>
                    <ReactMarkdown source={this.props.task.content} />
                    <Divider />
                    <p>Priority: {this.props.task.priority}</p>
                    <p>Status: {this.props.task.status}</p>
                </Segment>
            </Container>
        )
    }
}

export default TaskDetails