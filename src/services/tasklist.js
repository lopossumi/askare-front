import axios from 'axios'
const url = '/api/tasklists'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
    console.log('token was set to tasklists')
}

const config = () => {
    return({ headers: { 'Authorization': token }})
}

const getAll = () => {
    const request = axios.get(url, config())
    return request.then(response => response.data)
}

const create = async (tasklist) => {
        const response = await axios.post(url, {...tasklist}, config())
        return response.data
}

const remove = async (id) => {
        const response = await axios.delete(url+`/${id}`, config())
        return response.data
}

const edit = async (tasklist) => {
        const id = tasklist._id
        const response = await axios.put(url+`/${id}`, {...tasklist}, config())
        return response.data
}

const recycle = async (tasklist) => {
    throw new Error('Recycle not implemented.')
}

export default { 
    getAll, 
    setToken,
    create,
    remove,
    recycle,
    edit
}