import { useState, useEffect } from 'react'
import ExerciseForm from "./components/ExerciseForm"
import ExerciseList from './components/ExerciseList'
import exerciseService from './services/exercise'
import Notification from './components/Notification'

const App = () => {
  const [exercises, setExercises] = useState(null)
  const [notification, setNotification] = useState(null)
  const [notificationClasses, setNotificationClasses] = useState('')

  useEffect(() => {
    exerciseService.getAll()
      .then(exercises => setExercises(exercises))
  }, [])

  const displayNotification = (message, classes) => {
    setNotification(message)
    setNotificationClasses(classes)
    setTimeout(() => {
      setNotification(null)
      setNotificationClasses('')
    }, 5000)
  }

  const displayError = error => {
    displayNotification(error.response.data.error, 'notification error')
  }

  const createExercise = async (exerciseObject) => {
    try {
      const exercise = await exerciseService.create(exerciseObject)
      setExercises(exercises.concat(exercise))
      displayNotification(`Successfully created ${exercise.name}`, 'notification success')
    } catch (error) {
      displayError(error)
    }
  }

  const deleteExercise = async exerciseObject => {
    const okayToDelete = confirm(`Do you want to delete ${exerciseObject.name}?`)

    if (okayToDelete) {
      try {
        await exerciseService.remove(exerciseObject)
        setExercises(exercises.filter(e => e.id !== exerciseObject.id))
        displayNotification(`Successfully deleted ${exerciseObject.name}`, 'notification success')
      } catch (error) {
        displayError(error)
      }
    }
  }

  return (
    <>
      <h1>Exercise CRUD</h1>
      {notification && <Notification message={notification} classes={notificationClasses} />}
      <ExerciseForm createExercise={createExercise} />
      {exercises && <ExerciseList exercises={exercises} deleteExercise={deleteExercise}/>}
    </>
  )
}

export default App
