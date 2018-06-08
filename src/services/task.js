import axios from 'axios'
const url = '/api/tasks'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
    console.log('token was set to tasks')
}

const config = () => {
    return({ headers: { 'Authorization': token }})
}

const getAll = () => {
    const request = axios.get(url, config())
    return request.then(response => response.data)
}

const remove = async (id) => {
    try {
        const response = await axios.delete(url+`/${id}`, config())
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const create = async (task) => {
    try {
        const response = await axios.post(url, {...task}, config())
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const edit = async (task) => {
    try {
        const id = task._id
        const response = await axios.put(url+`/${id}`, {...task}, config())
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { 
    getAll, 
    setToken,
    create,
    remove,
    edit
}