import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const del = id => {
    return axios.delete(baseUrl + `/${id}`)
}

const change = (id, changedObject) => {
    return axios.put(`${baseUrl}/${id}`, changedObject)
}

export default {create, del, change}

