import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MainView from './components/MainView'
import LoginView from './components/LoginView'
import Footer from './components/Footer'

import { connect } from 'react-redux'
import { initialize } from './reducers/taskListReducer'
import taskList from './services/taskList'
import { login } from './reducers/userReducer'

class App extends React.Component {
    componentDidMount = async () => {
        // On first request or refresh check the local storage for logged user info
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          taskList.setToken(user.token)
          login(user)
        }
      
        this.props.initialize()
    }    

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Route path='/login' render={({history}) => <LoginView history={history}/>} />
                        <Route exact path='/' render={() => this.props.user ? <MainView taskLists={this.props.taskLists} /> : <Redirect to='/login' />}/>
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
