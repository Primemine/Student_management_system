import React, { useState } from 'react'
import { BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom'
import {
  HiOutlineDesktopComputer,
  AiOutlineBell,
  BiMessageDetail,
  HiOutlineUser,
  FiBox,
  GiSettingsKnobs, FaUsers, TiUserAddOutline
} from 'react-icons/all'
import AddStudent from '../AddStudent'
import { useLocation} from 'react-router-dom'
import EditStudent from '../EditStudent'
import StudentsHome from '../StudentsHome'
import DashBoard from '../DashBoard'


const Sidebar = ({onAdding,onDisplay,Student_Data,onDeleting,Std_data})=>{
  
  const location = useLocation()

  return(
    <>
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-3/12 bg-white rounded p-3 shadow-lg">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">Admin</h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/DashBoard"
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <HiOutlineDesktopComputer />
                    </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/StudentsHome"
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <FaUsers />
                    </span>
                <span>Students List</span>
              </Link>
            </li>
            <li>
                <Link to="/AddStudent"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <TiUserAddOutline />
                    </span>
                  <span>Create Student</span>
                </Link>
            </li>
            <li>
                <Link to="/EditStudent"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <HiOutlineUser />
                    </span>
                  <span>My profile</span>
                </Link>
            </li>
            <li>
              <Link to="/MyOrders"
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <FiBox />
                    </span>
                <span>My orders</span>
              </Link>
            </li>
            <li>
              <Link to="/Settings"
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <GiSettingsKnobs />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-9/12">
          <div className="p-4 text-gray-500">
            { location.pathname === '/AddStudent' ? <AddStudent onAdd={ onAdding }/> : location.pathname === '/StudentsHome' ?  <StudentsHome  onDisplay={ onDisplay }  Std_data={ Student_Data } St_Delete={ onDeleting }/> : location.pathname === '/DashBoard'? <DashBoard /> : location.pathname === '/EditStudent' ?<EditStudent Edit_Student={ Std_data } />  : '/'}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar