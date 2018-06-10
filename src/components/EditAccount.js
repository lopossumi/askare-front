import React from 'react'
import { Button, Modal, Icon, Segment, Container, Dropdown } from 'semantic-ui-react'
import AccountEditForm from './forms/AccountEditForm'

class EditAccount extends React.Component {
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
                trigger={ this.state.mode==='text' ? <div onClick={this.handleOpen}>Edit details</div> :
                    <Button size='mini' animated color='blue' onClick={this.handleOpen}>
                        <Button.Content hidden>Edit...</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'>Edit account information</Modal.Header>
                <Modal.Content>
                    <AccountEditForm 
                        mode='edit'
                        user={this.props.user}
                        handleClose={this.handleClose}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditAccount

