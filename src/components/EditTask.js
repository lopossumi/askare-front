import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import TaskEditForm from './forms/TaskEditForm'

class EditTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={
                    <Button size='mini' animated color='blue' onClick={this.handleOpen}>
                        <Button.Content hidden>Edit...</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='plus' />Edit task</Modal.Header>
                <Modal.Content>
                    <TaskEditForm 
                        mode='edit'
                        task={this.props.task}
                        handleClose={this.handleClose}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditTask

