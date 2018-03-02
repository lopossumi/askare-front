import { Container, Segment, Divider, Label } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PriorityIcon from './PriorityIcon'

class TaskDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDetails: false }
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
        console.log('details is', this.state.showDetails)
    }

    render() {
        const task = this.props.task
        return (
            <Container>
                <Segment
                    color={this.props.task.color}>
                    <Label
                        attached='top'
                        onClick={this.toggleDetails}>
                        <PriorityIcon priority={task.priority} />
                        <Label.Detail>{this.props.task.title}</Label.Detail>
                    </Label>
                    {this.state.showDetails && <div style={{ textAlign: 'justify' }}><ReactMarkdown source={this.props.task.content} />
                        <Divider />
                        <p>Priority: <PriorityIcon priority={task.priority} /></p>
                        <p>Status: {this.props.task.status}</p></div>}
                </Segment>
            </Container>
        )
    }
}

export default TaskDetails