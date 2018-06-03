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
                <Segment onClick={this.toggleDetails}>
                    <h3>{this.props.task.color 
                        ? <Label color={this.props.task.color || 'grey'} ribbon='right'/> 
                        : <Label ribbon='right'/>}
                    {this.props.task.title}</h3>
                    <TaskDetails task={this.props.task} show={this.state.showDetails}/>
                </Segment>
            </Container>
        )
    }
}

export default Task