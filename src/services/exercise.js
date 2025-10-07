const baseUrl = '/api/exercises'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

export default { getAll }