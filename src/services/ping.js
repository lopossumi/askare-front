import axios from 'axios'
const url = '/info'

export const ping = async () => {
    try {
        const response = await axios.get(url)
        console.log('Connected to server')
        return response.data
    } catch (error) {
        console.log('Server returned error')
        console.log(error.response.data)
        return error.response.data
    }
}

export default ping