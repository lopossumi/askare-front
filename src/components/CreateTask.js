import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import TaskEditForm from './forms/TaskEditForm'

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode,
            modalOpen: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
            trigger={ this.state.mode==='text' ? <div onClick={this.handleOpen}>New task</div> :
                    <Button icon size='mini' color='teal' onClick={this.handleOpen}>
                            <Icon name='plus' />
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='plus' />Create a new task</Modal.Header>
                <Modal.Content>
                    <TaskEditForm
                        mode='create'
                        handleClose={this.handleClose}
                        tasklist={this.props.tasklist}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateTask
