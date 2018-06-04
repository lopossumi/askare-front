import React from 'react'
import { Button, Form, Modal, Icon, Dropdown, Divider } from 'semantic-ui-react'
import taskListService from '../services/taskList'
import { createTaskList } from '../reducers/taskListReducer'
import { connect } from 'react-redux'


const colorOptions = [
    'green', 'red', 'blue', 'pink'
].map(x => ({text: x, value: x}))

class CreateTaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            color: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
        console.log(event)
    }

    handleDropdown(event, {value}) { 
        this.setState({ color: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const newTaskList = {
            title: this.state.title,
            color: this.state.color
        }

        const response = await taskListService.create(newTaskList)
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(`taskList ${response.title} (${response._id}) created! close modal and show message.`)
            this.props.createTaskList(response)
            this.handleClose()
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

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
                      
                        <Dropdown placeholder='Pick a color' fluid selection options={colorOptions} onChange={this.handleDropdown}/>

                        <Divider />    
                      
                        <Button type='submit' color='blue' onClick={this.handleSubmit}>Create</Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

//export default CreateTaskList
export default connect(
    null,
    { createTaskList }
)(CreateTaskList)
