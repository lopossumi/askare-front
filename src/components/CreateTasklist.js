import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import TasklistEditForm from './forms/TasklistEditForm'

class CreateTasklist extends React.Component {
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

    // By default render as a button. If mode is set to text, just show a div of text.
    render() {
        return (
            <Modal
                trigger={ this.state.mode==='text' ? <div onClick={this.handleOpen}>New list</div> :
                    <Button
                        color='green'
                        icon='plus'
                        content='Create new list'
                        labelPosition='left'
                        onClick={this.handleOpen} />
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='list' />Create a new task list</Modal.Header>
                <Modal.Content>
                    <TasklistEditForm
                        mode='create'
                        handleClose={this.handleClose} />
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateTasklist
