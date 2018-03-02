import { Container, Segment, Label } from 'semantic-ui-react'
import TaskDetails from './TaskDetails'
import React from 'react'
//import ReactMarkdown from 'react-markdown'

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDetails: false }
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
                    {this.state.showDetails &&
                        <TaskDetails task={this.props.task} />
                    }
                </Segment>
            </Container>
        )
    }
}

export default Task