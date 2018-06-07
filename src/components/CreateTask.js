import React from 'react'
import { Button, Form, Modal, Icon, Divider, TextArea, Message } from 'semantic-ui-react'
import taskService from '../services/task'
import { createTask } from '../reducers/taskReducer'
import { connect } from 'react-redux'
import colorOptions from './options/colorOptions'

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tasklist: props.tasklist,
            content: '',
            priority: '',
            status: '',
            color: '',
            errorMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleColor = this.handleColor.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event)
    }

    handleColor(event, { value }) {
        this.setState({ color: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        if (this.state.title === '') {
            this.setState({errorMessage: 'Title cannot be empty.'})
        } else {

            const newTask = {
                title: this.state.title,
                tasklist: this.state.tasklist,
                content: this.state.content,
                priority: this.state.priority,
                status: this.state.status,
                color: this.state.color,
            }

            const response = await taskService.create(newTask)
            if (response.error) {
                console.log(response.error)
            } else {
                console.log(`task ${response.title} added to list ${this.state.tasklist}! close modal and show message.`)
                console.log(response)

                // Add task to local store
                this.props.createTask(response)

                // Close modal
                this.handleClose()
            }
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({
        modalOpen: false,
        title: '',
        content: '',
        priority: '',
        status: '',
        color: ''
    })

    render() {
        return (
            <Modal
                trigger={
                    <Button size='mini' floated='right' animated color='green' onClick={this.handleOpen}>
                        <Button.Content hidden>New...</Button.Content>
                        <Button.Content visible>
                            <Icon name='plus' />
                        </Button.Content>
                    </Button>

                    // <Button
                    //     color='green'
                    //     icon='plus'
                    //     //content='Create new task'
                    //     labelPosition='left'
                    //     onClick={this.handleOpen} />
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='plus' />Create a new task</Modal.Header>
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

                        <Button type='submit' color='blue' onClick={this.handleSubmit}>Create</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect(
    null,
    { createTask }
)(CreateTask)

