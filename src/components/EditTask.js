import React from 'react'
import { Button, Form, Modal, Icon, Divider, TextArea, Message } from 'semantic-ui-react'
import taskService from '../services/task'
import { editTask } from '../reducers/taskReducer'
import { connect } from 'react-redux'
import colorOptions from './options/colorOptions'

class EditTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: props.task._id,
            title: props.task.title,
            tasklist: props.task.tasklist,
            content: props.task.content,
            priority: props.task.priority,
            status: props.task.status,
            color: props.task.color,

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

            const newTask = {
                _id: this.state._id,
                title: this.state.title,
                tasklist: this.state.tasklist,
                content: this.state.content,
                priority: this.state.priority,
                status: this.state.status,
                color: this.state.color,
            }

            const response = await taskService.edit(newTask)
            if (response.error) {
                console.log(response.error)
            } else {
                console.log(`task ${response.title} edited ${this.state.tasklist}! close modal and show message.`)
                console.log(response)

                // Add task to local store
                this.props.editTask(response)

                // Close modal
                this.handleClose()
            }
        }
    }

    handleOpen = () => this.setState({
        modalOpen: true,
        _id: this.props.task._id,
        title: this.props.task.title,
        tasklist: this.props.task.tasklist,
        content: this.props.task.content,
        priority: this.props.task.priority,
        status: this.props.task.status,
        color: this.props.task.color
    })


    handleClose = () => this.setState({
        modalOpen: false,
    })

    render() {
        return (
            <Modal
                trigger={
                    <Button floated='left' animated color='blue' onClick={this.handleOpen}>
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
                            <label>Content</label>
                            <TextArea
                                rows='10'
                                placeholder='Write some Markdown'
                                name='content'
                                onChange={this.handleInputChange}
                                value={this.state.content} />
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
    { editTask }
)(EditTask)

