import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import { deleteTasklist, recycleTasklist } from '../reducers/tasklistReducer'
import { connect } from 'react-redux'

class DeleteTasklist extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tasklist: props.tasklist }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = async (event) => {
        const id = this.state.tasklist
        this.props.deleteTasklist(id)
    }

    handleRecycle = async (event) => {
        const id = this.state.tasklist
        this.props.recycleTasklist(id)
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
    { deleteTasklist, recycleTasklist }
)(DeleteTasklist)