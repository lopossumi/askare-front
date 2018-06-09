import React from 'react'
import { Button, Form, Modal, Icon, Divider } from 'semantic-ui-react'
import tasklistService from '../services/tasklist'
import { createTasklist } from '../reducers/tasklistReducer'
import { connect } from 'react-redux'
import colorOptions from './options/colorOptions'
import { withRouter } from "react-router-dom";

class CreateTasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            color: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleColor = this.handleColor.bind(this)
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
        console.log(event)
    }

    handleColor(event, {value}) { 
        this.setState({ [event.target.name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const newTasklist = {
            title: this.state.title,
            color: this.state.color
        }

        const response = await tasklistService.create(newTasklist)
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(`tasklist ${response.title} (${response._id}) created! close modal and show message.`)
            this.props.createTasklist(response)
            this.handleClose()
            this.props.history.push('/')
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({
        modalOpen: false,
        title: '',
        color: ''
    })

    render() {
        return (
            <Modal
                trigger={
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
                      
                        <Button type='submit' color='blue' onClick={this.handleSubmit}>Create</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(connect(
    null,
    { createTasklist }
)(CreateTasklist))
