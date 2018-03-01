import { Container, Segment, Divider, Label } from 'semantic-ui-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'

class TaskDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showDetails: false}
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
        console.log('details is', this.state.showDetails)
    }

    render() {
        return (
            <Container>
                <Segment
                    color={this.props.task.color}>
                    <Label attached='top' color={this.props.task.color} onClick={this.toggleDetails}>{this.props.task.title}</Label>
                    {this.state.showDetails && <div><ReactMarkdown source={this.props.task.content} />
                        <Divider />
                    <p>Priority: {this.props.task.priority}</p>
                    <p>Status: {this.props.task.status}</p></div>}
                </Segment>
            </Container>
        )
    }
}

export default TaskDetails