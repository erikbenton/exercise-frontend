const listUrl = '/api/lists'

const getEquipment = async () => {
  const equipment = await fetch(`${listUrl}/equipment`)
  return await equipment.json()
}

const getBodyParts = async () => {
  const bodyParts = await fetch(`${listUrl}/bodyParts`)
  return await bodyParts.json()
}

export default { getEquipment, getBodyParts }