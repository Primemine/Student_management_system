import './App.css';
import React, { useEffect, useState } from 'react'
import Sidebar from './Components/layouts/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  
  const [student_data,setData] = useState([])
  
  useEffect(()=>{
  const getStudent = async () =>{
    const studentFromServer = await gettingStudents()
    setData(studentFromServer)
  }
  getStudent()
  },[])
  
  /*
Fetching student data
 */
  const gettingStudents = async () =>{
    const res = await fetch(`http://localhost:5000/student_data`)
    const student = await res.json()
    return student
  }
  /*
  adding  student data
   */
  const AddingStudent = async (data) =>{
    const res = await fetch(`http://localhost:5000/student_data`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(data)
    })
    const s_data = await res.json()
    setData([...student_data,s_data])
  }
  /*
  deleting data
   */
  const deleteStudent = async (id) =>{
    await  fetch(`http://localhost:5000/student_data/${id}`,{
      method:'DELETE'
    })
    setData(student_data.filter((data) => data.id !== id))
  }
  
  /*
  Editing student information....
   */
  const ShowStudent = async (id) =>{
    const show = await fetch(`http://localhost:5000/student_data/${id}`)
    const student_show = show.json()
    return student_show
  }
  return (
    <Router>
      { <Sidebar onAdding={ AddingStudent } Student_Data={ student_data } onDeleting={ deleteStudent } StudentShow={ ShowStudent }/>}
    </Router>
  );
}

export default App;
