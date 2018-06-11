import React from 'react'
import { Button, Divider, Icon, Input, Message, Modal } from 'semantic-ui-react'
import { deleteUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

class DeleteAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode,
            modalOpen: false,
            username: '',
            errorMessage: ''
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    handleOpen = () => this.setState({ modalOpen: true, username: '' })
    handleClose = () => this.setState({ modalOpen: false })

    handleDelete = async (event) => {
        console.log(this.state.username)
        console.log(this.props.user.username)

        if (this.state.username.toLowerCase() !== this.props.user.username) {
            this.setState({ errorMessage: 'This is not your username.' })
        }
        else {
            try {
                await this.props.deleteUser(this.props.user)
                this.setState({ errorMessage: 'Account deleted! Logging out...' })

            } catch (error) {
                this.setState({ errorMessage: 'Server error. Could not delete account.' })
                console.log(error)
            }
        }
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    // By default render as a button. If mode is set to text, just show a div of text.
    render() {
        return (
            <Modal
                trigger={<div onClick={this.handleOpen}>Remove account</div>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='delete' />Delete account</Modal.Header>
                <Modal.Content>
                    <h1>Warning: Are you sure you want to delete your account?</h1>
                    <h3>This operation cannot be undone. All your tasks and lists are deleted along with your user information.</h3>
                    <p>To really delete your account, type your current password into the field below.</p>
                    <Input
                        error={!!this.state.errorMessage}
                        label='Username'
                        type='username'
                        placeholder='Type your username'
                        name='username'
                        onChange={this.handleInputChange}
                        value={this.state.username} />

                    <Divider />

                    <Message 
                        color='red' 
                        hidden={this.state.errorMessage === ''}>
                        {this.state.errorMessage}
                    </Message>

                    <Button 
                        color='red' 
                        onClick={this.handleDelete}>
                        Delete account
                    </Button>
                    <Button 
                        onClick={this.handleClose}>
                        Cancel
                    </Button>
                
                </Modal.Content>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
    { deleteUser }
)(DeleteAccount)