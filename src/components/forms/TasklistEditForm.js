import React from 'react'
import { Button, Form, Divider, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import colorOptions from '../options/colorOptions'
import { createTasklist, editTasklist } from '../../reducers/tasklistReducer'

class TasklistEditForm extends React.Component {
    constructor(props) {
        super(props);

        if (props.mode === 'create') {
            this.state = {
                mode: 'create',
                errorMessage: '',

                title: '',
                color: ''
            }
        } else {
            this.state = {
                // Fill all fields from props.tasklist
                ...props.tasklist,
                mode: 'edit',
                errorMessage: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleColor = this.handleColor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleColor(event, { value }) {
        this.setState({ [event.target.name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        if (this.state.title === '') {
            this.setState({ errorMessage: 'Title cannot be empty.' })
        } else {
            const newTasklist = {
                title: this.state.title,
                color: this.state.color
            }

            if (this.props.mode === 'create') {
                this.props.createTasklist(newTasklist)
            } else {
                this.props.editTasklist({ ...newTasklist, _id: this.state._id })
            }
            this.props.handleClose()
        }
    }

    render() {
        return (
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
                    name='color'
                    circular
                    key={color.value}
                    color={color.value}
                    value={color.value}
                    onClick={this.handleColor} />
            )}

            <Divider />

            <Message 
                color='red' 
                hidden={this.state.errorMessage === ''}>
                {this.state.errorMessage}
            </Message>

            <Button 
                type='submit' 
                color='blue' 
                onClick={this.handleSubmit}>
                Save
            </Button>
            <Button 
                onClick={this.props.handleClose}>
                Cancel
            </Button>
            
        </Form>
        )
    }
}

export default connect(
    null,
    { createTasklist, editTasklist }
)(TasklistEditForm)