import React from 'react'
import Task from './Task'
import { Segment, Message, Container, Divider, Button, Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import CreateTask from './CreateTask'
import EditTasklist from './EditTasklist'
import { connect } from 'react-redux'

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

                            {/* If there are tasks in the list, map them into a segment group within list borders. 
                                Tasks are also filtered at this stage by search keyword; the string must be found in title or content.
                                Filtering is done twice to avoid rendering an empty <Segment.Group>. */}
                            {(this.props.tasks
                                .filter(x =>
                                    x.content.toLowerCase().indexOf(this.props.search.toString().toLowerCase()) !== -1
                                    || x.title.toLowerCase().indexOf(this.props.search.toString().toLowerCase()) !== -1)
                                .filter(x => x.tasklist === tasklist._id).length !== 0) &&
                                <Segment.Group>
                                    {this.props.tasks
                                        .filter(x => x.tasklist === tasklist._id)
                                        .filter(x =>
                                            x.content.toLowerCase().indexOf(this.props.search.toString().toLowerCase()) !== -1
                                            || x.title.toLowerCase().indexOf(this.props.search.toString().toLowerCase()) !== -1)
                                        .map(item =>
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
                {this.props.tasklists.length === 0 &&
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


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        search: state.search
    }
}

export default connect(
    mapStateToProps,
    null
)(MainView)