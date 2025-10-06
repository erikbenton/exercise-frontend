import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const ExerciseForm = () => {
  const bodyParts = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
  const equipments = ['assisted', 'band', 'barbell', 'body weight', 'cable', 'dumbbell', 'machine', 'ez barbell', 'kettlebell',
    'medicine ball', 'resistance band', 'roller', 'rope', 'stability ball', 'trap bar', 'weighted']
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipment, setEquipment] = useState(equipments[0])
  const [bodyPart, setBodyPart] = useState(bodyParts[0])
  const [instructions, setInstructions] = useState([])

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
        <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
          {equipments.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
      </label>
      <br />
      <label>Body Part:
        <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
          {bodyParts.map(bp => <option key={bp} value={bp}>{bp}</option>)}
        </select>
      </label>
      <br />
      {instructions.length === 0
      ? null
      : <ol>
          {instructions.map(ints => {
             return (<li key={ints.id}>
              <textarea value={ints.content} onChange={(e) => updateInstruction(e, ints.id)} />
                <button onClick={() => deleteInstruction(ints.id)}>Remove</button>
            </li>)})}
        </ol>}
      <button type="button" onClick={addBlankInstruction}>Add instruction</button>
    </form>
  )
}

export default ExerciseForm