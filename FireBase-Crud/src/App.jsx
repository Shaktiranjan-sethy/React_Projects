import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { db } from './Firebase';
import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])
  const [updatedData, setUpdatedData] = useState({})
  const [id, setId] = useState('')

  const collectionRef = collection(db, 'crud')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id === '') {
      await addDoc(collectionRef, { name, email })
      console.log("form submitted");

      setName('')
      setEmail('')

    } else {
      const updateData = doc(db, 'crud', id);
      updateDoc(updateData, { name, email })
      setName('')
      setEmail('')
      setId("");
    }

  }

  const handleDelete = (id) => {
    const deleteData = doc(db, 'crud', id);
    deleteDoc(deleteData);
  }

  const handleUpdate = (id) => {
    setId(id)
    const updateData = doc(db, 'crud', id);
    getDoc(updateData).then((doc) => setUpdatedData(doc.data()));
  }

  useEffect(() => {

    // const fetchData = async () =>{
    //   const fetch  = await getDocs(collectionRef)
    //   setData(fetch.docs.map((doc)=>({
    //     ...doc.data(), id:doc.id
    //   })))
    // }



    const fetchData = async () => {
      onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }
    fetchData();
    //console.log(data);

    setName(updatedData.name)
    setEmail(updatedData.email)

    console.log("useEffect is running");

  }, [updatedData])

  return (
    <>
      <div className="app">
        <h1>Firebase CRUD</h1>
        <form onSubmit={handleSubmit}>
          name: <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          email: <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input type='submit' />
        </form>
      </div>

      <div className="App">
        {
          data.map((d) => {
            return (
              <>
                <h1>{d.name} {d.email} {" "}
                  <button onClick={() => handleDelete(d.id)}>Delete</button> {" "}
                  <button onClick={() => handleUpdate(d.id)}>Update</button> {" "}
                </h1>
              </>
            )
          })
        }
      </div>


    </>
  )
}

export default App
