import axios from 'axios'
const url = 'http://localhost:3001/api/tasklists'

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

const create = async (taskList) => {
    try {
        const response = await axios.post(url, taskList)
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