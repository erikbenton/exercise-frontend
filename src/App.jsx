import { useState, useEffect } from 'react'
import ExerciseForm from "./components/ExerciseForm"
import ExerciseList from './components/ExerciseList'
import exerciseService from './services/exercise'

const App = () => {
  const [exercises, setExercises] = useState(null)

  useEffect(() => {
    exerciseService.getAll()
      .then(exercises => setExercises(exercises))
  }, [])

  return (
    <>
      <h1>Exercise CRUD</h1>
      <ExerciseForm />
      {exercises && <ExerciseList exercises={exercises} />}
    </>
  )
}

export default App
