import axios from 'axios'
const url = '/api/tasks'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const config = {
        headers: { 'Authorization': token }
    }

    const request = axios.get(url, config)
    return request.then(response => response.data)
}

const create = async (task) => {
    const config = {
        headers: { 'Authorization': token }
    }

    try {
        const response = await axios.post(url, {...task}, config)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { 
    getAll, 
    setToken,
    create
}