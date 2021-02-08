import React from 'react'
import CreateStudent from './CreateStudent'

const AddStudent = ({onAdd}) =>{
  return(
    <>
      <CreateStudent onAdd={onAdd}/>
    </>
  )
}
export  default AddStudent