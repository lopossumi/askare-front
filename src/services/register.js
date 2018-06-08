import axios from 'axios'
const url = '/api/users'

const register = async (user) => {
    try {
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        console.log(error.response)
        return {...error.response, error: error.response.statusText}
    }
}

export default { register }