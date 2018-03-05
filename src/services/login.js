import axios from 'axios'
const url = 'http://localhost:3001/api/login'

const login = async (credentials) => {
    try {
        const response = await axios.post(url, credentials)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { login }