import React from 'react'
import WriteModal from '../component/WriteModal'
import { Navigate } from 'react-router-dom'

const PrivateWriteRoute = ({authenticate}) => {
  return
  authenticate === true ? <WriteModal/> : <Navigate to="/login"/>
}

export default PrivateWriteRoute
