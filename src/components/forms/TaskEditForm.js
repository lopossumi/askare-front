import React from 'react'
import { Button, Form, Divider, TextArea, Message, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import colorOptions from '../options/colorOptions'
import { createTask, editTask } from '../../reducers/taskReducer'

class TaskEditForm extends React.Component {
    constructor(props) {
        super(props);

        if (props.mode === 'create') {
            this.state = {
                mode: 'create',
                errorMessage: '',

                title: '',
                tasklist: props.tasklist,
                content: '',
                priority: '',
                status: '',
                color: '',
            }
        } else {
            this.state = {
                // Fill all fields from props.task
                ...props.task,

                mode: 'edit',
                errorMessage: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleColor = this.handleColor.bind(this)
        this.handleTasklist = this.handleTasklist.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleColor(event, { value }) {
        this.setState({ [event.target.name]: value })
    }

    handleTasklist(event, { value }) {
        this.setState({ tasklist: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        if (this.state.title === '') {
            this.setState({ errorMessage: 'Title cannot be empty.' })
        } else {
            const newTask = {
                title: this.state.title,
                tasklist: this.state.tasklist,
                content: this.state.content,
                priority: this.state.priority,
                status: this.state.status,
                color: this.state.color,
            }
            if (this.props.mode === 'create') {
                this.props.createTask(newTask)
            } else {
                this.props.editTask({ ...newTask, _id: this.state._id })
            }
            this.props.handleClose()
        }
    }

    listOptions = this.props.tasklists.map(x => ({ text: x.title, value: x._id }))

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
                    <label>In list</label>
                    <Dropdown fluid selection
                        placeholder='Select list'
                        options={this.listOptions}
                        value={this.state.tasklist}
                        onChange={this.handleTasklist} />
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
                        name='color'
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
                <Button onClick={this.props.handleClose}>Cancel</Button>
            </Form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tasklists: state.tasklists,
    }
}

export default connect(
    mapStateToProps,
    { createTask, editTask }
)(TaskEditForm)