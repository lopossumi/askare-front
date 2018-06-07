import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MainView from './components/MainView'
import LoginView from './components/LoginView'
import UserInfo from './components/UserInfo'
import Footer from './components/Footer'

import { connect } from 'react-redux'
import { initialize } from './reducers/tasklistReducer'
import { login } from './reducers/userReducer'
import { ping } from './services/ping'

class App extends React.Component {
    componentDidMount = async () => {
        console.log('** App.js: componentdidmount starts')
        // Ping the server immediately to start heroku dyno if it has stopped. This should lower response time.
        ping()

        // On first request or refresh check the local storage for logged user info.
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          this.props.login(user)
          this.props.initialize(user)
        } else {
            console.log('user is not logged in.')
        }
        console.log('** App.js: componentdidmount ends')
    }

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Route path='/login' render={({history}) => <LoginView history={history}/>} />
                        
                        <Route path='/userinfo' render={() => 
                            window.localStorage.getItem('loggedUser') 
                            ? <UserInfo user={this.props.user}/>
                            : <Redirect to='/login' />}/>
                        
                        <Route exact path='/' render={({history}) => 
                            window.localStorage.getItem('loggedUser') 
                            ? <MainView history={history} tasklists={this.props.tasklists} tasks={this.props.tasks}/> 
                            : <Redirect to='/login' />}/>
                    </div>
                </Router>

                <Footer />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasklists: state.tasklists,
        tasks: state.tasks,
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    { initialize, login, ping }
)(App)
