import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainView from './components/MainView'
import LoginView from './components/LoginView'
import Footer from './components/Footer'

import { connect } from 'react-redux'
import { initialize } from './reducers/taskListReducer'

// const myUser = {
//     taskLists: [
//         8273
//     ],
//     username: 'teppo',
//     firstName: 'Teppo',
//     lastName: 'Testi'
// }

class App extends React.Component {
    componentDidMount = async () => {
        this.props.initialize()
    }

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Route path='/login' render={({history}) => <LoginView history={history}/>} />
                        <Route exact path='/' render={() => <MainView taskLists={this.props.taskLists} />}/>
                    </div>
                </Router>

                <Footer />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskLists: state.taskLists,
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    { initialize }
)(App)
