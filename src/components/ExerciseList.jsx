import Togglable from './Togglable'

const ExerciseList = ({ exercises }) => {
  return (
    <ul>
      {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} />)}
    </ul>
  )
}

const Exercise = ({ exercise }) => {
  return (
    <div>
      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>
      {!exercise.instructions
        ? 'No instructions to display'
        : <Togglable buttonLabel="Show instructions">
            <Instructions instructions={exercise.instructions} />
          </Togglable>
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