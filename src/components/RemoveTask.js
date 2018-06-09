import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import taskService from '../services/task'
import { removeTask } from '../reducers/taskReducer'
import { connect } from 'react-redux'

class RemoveTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = { taskId: props.taskId }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = async (event) => {
        const id = this.state.taskId
        console.log(`trying to delete task (${id})`)
        const response = await taskService.remove(id)
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(`task (${id}) deleted from server. Delete local, too.`)
            this.props.removeTask(id)
        }

    }

    render() {
        return <Button negative size='mini' animated onClick={this.handleDelete}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='delete' />
            </Button.Content>
        </Button>

    }
}

export default connect(
    null,
    { removeTask }
)(RemoveTask)