const baseUrl = '/api/exercises'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

const create = async (exercise) => {
  const postConfig = { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exercise) }
  const response = await fetch(baseUrl, postConfig)
  return await response.json()
}

export default { getAll, create }