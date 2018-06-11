import { Segment, Icon } from 'semantic-ui-react'
import TaskDetails from './TaskDetails'
import React from 'react'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            showDetails: false 
        }
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        return (
                <Segment 
                    attached 
                    color={this.props.task.color}>
                    <Icon 
                        size='large' 
                        onClick={this.toggleDetails} 
                        name={this.state.showDetails ? 'caret down' : 'caret right'} 
                    />
                    <span 
                        onClick={this.toggleDetails}>
                        {this.props.task.title}
                    </span>
                    <TaskDetails 
                        task={this.props.task} 
                        show={this.state.showDetails}
                    />
                </Segment>
        )
    }
}

export default Task