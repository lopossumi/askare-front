import axios from 'axios'
//const url = 'localhost'
const url = 'https://askare-server.herokuapp.com/api/login'

const login = async (credentials) => {
    try {
        const response = await axios.post(url, credentials)
        return response.data
    } catch (error) {
        console.log('login service logged error.')
        console.log(error.response.data)
        return error.response.data
    }
}

export default { login }