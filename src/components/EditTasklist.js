import React from 'react'
import { Button, Form, Modal, Icon, Divider, Message } from 'semantic-ui-react'
import tasklistService from '../services/tasklist'
import { editTasklist } from '../reducers/tasklistReducer'
import { connect } from 'react-redux'
import colorOptions from './options/colorOptions'

class EditTasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: props.tasklist._id,
            title: props.tasklist.title,
            color: props.tasklist.color,

            errorMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleColor = this.handleColor.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleColor(event, { value }) {
        this.setState({ color: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        if (this.state.title === '') {
            this.setState({ errorMessage: 'Title cannot be empty.' })
        } else {

            const newTasklist = {
                _id: this.state._id,
                title: this.state.title,
                color: this.state.color,
            }

            const response = await tasklistService.edit(newTasklist)
            if (response.error) {
                console.log(response.error)
            } else {
                console.log(response)

                // Add task to local store
                this.props.editTasklist(response)

                // Close modal
                this.handleClose()
            }
        }
    }

    handleOpen = () => this.setState({
        modalOpen: true,
        _id: this.props.tasklist._id,
        title: this.props.tasklist.title,
        color: this.props.tasklist.color
    })


    handleClose = () => this.setState({
        modalOpen: false,
    })

    render() {
        return (
            <Modal
                trigger={
                    <Button floated='right' size='mini' animated color='blue' onClick={this.handleOpen}>
                        <Button.Content hidden>Edit...</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='plus' />Edit tasklist</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input
                                placeholder='Pick a title'
                                name='title'
                                onChange={this.handleInputChange}
                                value={this.state.title} />
                        </Form.Field>

                        <Form.Field>
                            Select label color: <b>{this.state.color}</b>
                        </Form.Field>

                        {colorOptions.map(color =>
                            <Button
                                circular
                                key={color.value}
                                color={color.value}
                                value={color.value}
                                onClick={this.handleColor} />
                        )}

                        <Divider />

                        <Message color='red' hidden={this.state.errorMessage === ''}>
                            {this.state.errorMessage}
                        </Message>

                        <Button type='submit' color='blue' onClick={this.handleSubmit}>Save</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect(
    null,
    { editTasklist }
)(EditTasklist)

