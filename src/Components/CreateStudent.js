import React, { useState } from 'react'
import Button from './layouts/Button'

const CreateStudent = ({ onAdd }) =>{
  const [fullName,setFullName] = useState()
  const [parentName,setParentName] = useState()
  const [email,setEmail] = useState()
  const [phoneNumber,setPhoneNumber] = useState()
  const [date,setDate] = useState()
  const [region,setRegion] = useState()
  const [course,setCourse] = useState()
  
  /*
  for validation
   */
  const SubmitForm = (e) =>{
    e.preventDefault()
    if ( !fullName && !parentName && !email && !phoneNumber && !date && !region && !course ){
      alert('Enter all the fields...')
    }
      onAdd({fullName,parentName,email,phoneNumber,date,region,course})
      setCourse('')
      setRegion('')
      setDate('')
      setPhoneNumber('')
      setParentName('')
      setFullName('')
      setEmail('')
  }
  
  return(
    <div className='createForm'>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <form onSubmit={SubmitForm}>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-first-name">
                 Student Full Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name" type="text" placeholder="John Prime " value={fullName} onChange={(e) =>setFullName(e.target.value)} />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-last-name">
                Parent /Relative Full Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name" type="text" placeholder="John Kimai" value={parentName} onChange={(e) =>setParentName(e.target.value)}/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-first-name">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name" type="text" placeholder="prime@prime.co.tz" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-last-name">
                Phone number
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name" type="number" placeholder="+255 758522463" value={phoneNumber} onChange={(e) =>setPhoneNumber(e.target.value)}/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-city">
                Date of birth
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-city" type="text" placeholder="27th October 1995" value={date} onChange={(e) =>setDate(e.target.value)}/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                     htmlFor="grid-state">
                Place of birth (Region)
              </label>
              <div className="relative">
                <input
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="grid-state" value={region} onChange={(e) =>setRegion(e.target.value)}/>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
               selected Course
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-zip" type="text" placeholder="Computer science" value={course} onChange={(e)=>setCourse(e.target.value)}/>
            </div>
          </div>
          <Button title='Add Student' style={{Float:'right'}}/>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent