import axios from 'axios'
const url = '/api/tasks'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
    console.log('token was set to tasks')
}

const getAll = () => {
    const config = {
        headers: { 'Authorization': token }
    }

    console.log('task service: trying to get all tasks')
    console.log('config:')
    console.log(config)
    const request = axios.get(url, config)
    return request.then(response => response.data)
}

const remove = async (id) => {
    const config = {
        headers: { 'Authorization': token }
    }

    try {
        const response = await axios.delete(url+`/${id}`, config)
        return response.data
    } catch (error) {
        return error.response.data
    }
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
    create,
    remove
}