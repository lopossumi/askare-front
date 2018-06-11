import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import { deleteTasklist, recycleTasklist } from '../reducers/tasklistReducer'
import { connect } from 'react-redux'

class DeleteTasklist extends React.Component {
    render() {
        return (
            <Button 
                animated 
                size='mini' 
                floated='right' 
                color='red' 
                onClick={()=>this.props.deleteTasklist(this.props.id)}>
                <Button.Content 
                    hidden>
                    Remove
                </Button.Content>
                <Button.Content 
                    visible>
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