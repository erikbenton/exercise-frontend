import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import listService from '../services/lists'
import { useEffect } from "react"

const ExerciseForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState(null)
  const [equipment, setEquipment] = useState(null)
  const [bodyParts, setBodyParts] = useState(null)
  const [bodyPart, setBodyPart] = useState(null)
  const [instructions, setInstructions] = useState([])

  const getEquipmentHook = () => {
    listService.getEquipment()
      .then(equipment => {
        setEquipments(equipment)
        setEquipment(equipment[0])
      })
  }

  const getBodyPartsHook = () => {
    listService.getBodyParts()
      .then(bodyParts => {
        setBodyParts(bodyParts)
        setBodyPart(bodyParts[0])
      })
  }

  useEffect(getEquipmentHook, [])
  useEffect(getBodyPartsHook, [])

  const addBlankInstruction = () => {
    setInstructions(instructions.concat({
      id: uuidv4(),
      content: ''
    }))
  }

  const updateInstruction = (e, id) => {
    const instruction = instructions.find(i => i.id === id)
    if (instruction) {
      const updatedInstruction = { ...instruction, content: e.target.value }
      setInstructions(instructions.map(i => i.id === id ? updatedInstruction : i))
    }
  }

  const deleteInstruction = (id) => {
    const instruction = instructions.find(i => i.id === id)
    if (instruction) {
      setInstructions(instructions.filter(i => i.id !== id))
    }
  }

  return (
    <form>
      <label>Name:
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' />
      </label>
      <br />
      <label>Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>Equipment:
        {equipments === null
          ? null
          : <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            {equipments.map(e => <option key={e} value={e}>{e}</option>)}
          </select>}
      </label>
      <br />
      <label>Body Part:
        {bodyParts === null
          ? null
          : <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
            {bodyParts.map(bp => <option key={bp} value={bp}>{bp}</option>)}
          </select>}
      </label>
      <br />
      {instructions.length === 0
        ? null
        : <ol>
          {instructions.map(ints => {
            return (<li key={ints.id}>
              <textarea value={ints.content} onChange={(e) => updateInstruction(e, ints.id)} />
              <button onClick={() => deleteInstruction(ints.id)}>Remove</button>
            </li>)
          })}
        </ol>}
      <button type="button" onClick={addBlankInstruction}>Add instruction</button>
    </form>
  )
}

export default ExerciseForm