import axios from 'axios'
const url = '/api/users'

const register = async (user) => {
    try {
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        // Either the server responded with a validation error, or cannot connect to server.
        // Forward the correct message.
        const errorText = error.response.data.error || error.response.statusText
        return {...error.response.data, error: errorText }
    }
}

export default { register }