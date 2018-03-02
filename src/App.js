import React from 'react'
import { Container } from 'semantic-ui-react'
import { Icon, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import MainView from './components/MainView'
import LoginView from './components/LoginView'

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
        console.log('trying to initialize')
        this.props.initialize()
    }

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Route path='/login' render={() => <LoginView />} />
                        <Route exact path='/' render={() => <MainView taskLists={this.props.taskLists} />}/>
                    </div>
                </Router>

                <Footer />
            </Container>
        )
    }
}

const Footer = () => (
    <div>
        <Divider />
        <Icon name='list' />askare &copy; Mikko Loponen 2018. < a href='https://github.com/lopossumi/askareact' > View source <Icon name='github' />GitHub.</a >
    </div>
)

const mapStateToProps = (state) => {
    return {
        taskLists: state.taskLists,
    }
}

export default connect(
    mapStateToProps,
    { initialize }
)(App)
