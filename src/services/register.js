import axios from 'axios'
const url = 'https://askare-server.herokuapp.com/api/users'

const register = async (user) => {
    try {
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { register }