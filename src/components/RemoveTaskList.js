import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import taskListService from '../services/taskList'
import { removeTaskList } from '../reducers/taskListReducer'
import { connect } from 'react-redux'

class RemoveTaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tasklist: props.tasklist }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = async (event) => {
        const id = this.state.tasklist
        console.log(`trying to delete task (${id})`)
        const response = await taskListService.remove(id)
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(`tasklist (${id}) deleted from server. Delete local, too.`)
            this.props.removeTaskList(id)
        }

    }

    render() {
        return (
            <Button size='mini' floated='right' animated color='red' onClick={this.handleDelete}>
                <Button.Content hidden>Remove</Button.Content>
                <Button.Content visible>
                    <Icon name='trash' />
                </Button.Content>
            </Button>
        )
    }
}

export default connect(
    null,
    { removeTaskList }
)(RemoveTaskList)