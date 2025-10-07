import { useState } from 'react'

const ExerciseList = ({ exercises }) => {
  return (
    <ul>
      {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} />)}
    </ul>
  )
}

const Exercise = ({ exercise }) => {
  const [displayInstructions, setDisplayInstruction] = useState(false)

  const toggleDisplayInstructions = () => {
    setDisplayInstruction(!displayInstructions)
  }

  return (
    <div>
      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>
      {!exercise.instructions
        ? 'No instructions to display'
        : (<button onClick={toggleDisplayInstructions}>{displayInstructions ? 'Hide' : 'Show'} instructions</button>)}
        {displayInstructions
        ? <Instructions instructions={exercise.instructions} />
        : null
        }
    </div>

  )
}

const Instructions = ({ instructions }) => {
  return (
    <ol>
      {instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
    </ol>
  )
}

export default ExerciseList