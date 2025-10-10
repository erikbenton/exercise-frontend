import axios from 'axios'
const baseUrl = '/api/exercises'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async object => {
  const response = await axios.post(baseUrl, object)
  return response.data
}

const remove = async object => {
  const response = await axios.delete(`${baseUrl}/${object.id}`)
  return response.data
}

export default { getAll, create, remove }