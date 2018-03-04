import axios from 'axios'
const url = 'http://localhost:3001/api/users'

const register = async (user) => {
    try {
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { register }