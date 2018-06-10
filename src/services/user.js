import axios from 'axios'
const url = '/api/users'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const config = () => {
    return({ headers: { 'Authorization': token }})
}

const edit = async (user) => {
    try {
        const response = await axios.put(url+`/${user._id}`, user, config())
        return response.data
    } catch (error) {
        // Either the server responded with a validation error, or cannot connect to server.
        // Forward the correct message.
        const errorText = error.response.data.error || error.response.statusText
        return {...error.response.data, error: errorText }
    }
}

export default { 
    setToken,
    edit 
}