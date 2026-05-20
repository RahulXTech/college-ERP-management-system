import React from 'react'
import Sidebar from '../components/Sidebar'
import MainPage from '../components/MainPage'
import FeePayment from './FeePayment'

function LeftRightPage() {
  return (
    <div>
        <Sidebar/>
        <MainPage/>
        <FeePayment/>
    </div>
  )
}

export default LeftRightPage