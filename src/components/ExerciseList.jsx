import Togglable from './Togglable'

const ExerciseList = ({ exercises, deleteExercise }) => {
  return (
    <ul>
      {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} deleteExercise={deleteExercise} />)}
    </ul>
  )
}

const Exercise = ({ exercise, deleteExercise }) => {
  return (
    <li>
      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>
      {!exercise.instructions
        ? <p>No instructions to display</p>
        : <Togglable showLabel="Show instructions" hideLabel="Hide instructions">
          <Instructions instructions={exercise.instructions} />
        </Togglable>
      }
      <button onClick={() => deleteExercise(exercise)}>Delete Exercise</button>
    </li>

  )
}

const Instructions = ({ instructions }) => {
  return (
    <ol>
      {instructions.map((instruction) => <li key={instruction.id}>{instruction.content}</li>)}
    </ol>
  )
}

export default ExerciseList