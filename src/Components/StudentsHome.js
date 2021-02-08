import React from  'react'
import StudentHome from './StudentHome'
import { Link } from 'react-router-dom'
import Button from './layouts/Button'
import { FaRegEdit, RiDeleteBinLine } from 'react-icons/all'


const StudentsHome = ({ Std_data, St_Delete }) =>{
  return(
    <>
      <div className="p-4 flex space-x-96">
        <h1 className="text-3xl">
          Students
        </h1>
        <Link to='/AddStudent'>
          <Button title='Add Student' />
        </Link>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Student Name</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">Course</th>
            <th className="text-left p-3 px-5">Phone Number</th>
            <th></th>
          </tr>
      { Std_data.map((Std_data) => (
       // <StudentHome   Std_data={ Std_data }/>
        <tr className="border-b hover:bg-orange-100" key={Std_data.id }>
          <td className="p-3 px-5"><h5>{ Std_data.fullName}</h5></td>
          <td className="p-3 px-5">{ Std_data.email}</td>
          <td className="p-3 px-5">{ Std_data.course}</td>
          <td className="p-3 px-5">{  Std_data.phoneNumber }</td>
          <td className="p-3 px-5 flex justify-end">
            <button type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"  ><FaRegEdit />
            </button>
            <button type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=> St_Delete(Std_data.id) }><RiDeleteBinLine />
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
    </>
  )
}

export default StudentsHome