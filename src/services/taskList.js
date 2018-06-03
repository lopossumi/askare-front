import axios from 'axios'
const url = '/api/tasklists'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
    console.log('token was set to tasklists')
}

const getAll = () => {
    const config = {
        headers: { 'Authorization': token }
    }

    console.log('tasklist service: trying to get all lists')
    const request = axios.get(url, config)
    return request.then(response => response.data)
}

const create = async (taskList) => {
    const config = {
        headers: { 'Authorization': token }
    }

    try {
        const response = await axios.post(url, {...taskList}, config)
        return response.data
    } catch (error) {
        return error.response.data
    }
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

export default { 
    getAll, 
    setToken,
    create,
    remove
}