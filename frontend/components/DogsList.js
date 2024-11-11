import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DogsList({dogs, getDogs,  setCurrentDog}) {
  
  const navigate = useNavigate()

  const editDogs = id => {
setCurrentDog(id)

 navigate('form')
  }

  const deleteDogs = id => {
fetch(`/api/dogs/${id}`, {method: 'DELETE'})
.then(res => {
  if(!res.ok) throw Error('Problem DELETING')
    getDogs()
    setCurrentDog(null)
})
.catch(err => console.log(err))
  }
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
       {
        dogs.map(dog => (
          <li key={dog.id}>
            {dog.name}, {dog.breed}, {dog.adopted ? '' : 'Not '} adopted
          <div>
            <button onClick={()=> editDogs(dog.id)}>Edit</button>
            <button onClick={() => deleteDogs(dog.id)}>Delete</button>
          </div>
        </li>
        ))
       }
      </ul>
    </div>
  )
}