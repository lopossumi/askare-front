import React from 'react'
import Task from './Task'
import { Segment, Message, Container, Divider, Button, Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import CreateTask from './CreateTask'
import EditTasklist from './EditTasklist'

class MainView extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                
                {/* Show messages below navigation header. */}
                <Message info hidden>
                    Notification stub
                </Message>
                               
                {/* If there are lists, map them into containers. */}
                {this.props.tasklists && this.props.tasklists.map(tasklist => 
                    <Container key={tasklist._id}>
                        <Segment.Group raised>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column floated='left' computer='1' tablet='2' mobile='3'>
                                            <Button.Group vertical>
                                                <EditTasklist tasklist={tasklist} />
                                                <CreateTask tasklist={tasklist._id} />
                                            </Button.Group>
                                        </Grid.Column>
                            
                                        <Grid.Column computer='15' tablet='14' mobile='13'>
                                            <h1>{tasklist.title}</h1>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>

                            {/* If there are tasks in the list, map them into a segment group within list borders. */}
                            {(this.props.tasks.filter(x => x.tasklist === tasklist._id).length !== 0) && 
                                <Segment.Group>
                                    {this.props.tasks.filter(x => x.tasklist === tasklist._id).map(item =>
                                        <Task
                                            key={item._id}
                                            task={item} 
                                        />
                                    )}
                                </Segment.Group>
                            }
                        </Segment.Group>
                        <Divider section hidden />
                    </Container>
                )}

                {/* Show an info message if user has no lists. */}
                {this.props.tasklists.length===0 && 
                    <Message info>
                        <Message.Header>
                            You do not have any task lists yet.
                        </Message.Header>
                        <p>Click on the <b>Create new list</b> button to start.</p>
                    </Message>
                }
                
                {/* Tasks not in lists are rendered last. */}
                {this.props.tasks.filter(x => !x.tasklist).map(item =>
                    <Task
                        key={item._id}
                        task={item} 
                    />
                )}

            </div>
        )
    }
}

export default MainView