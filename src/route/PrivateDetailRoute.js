import React from 'react'
import { Navigate } from 'react-router-dom'
import BoardItem from '../component/BoardItem';

const PrivateDetailRoute = ({authenticate}) => {
  return authenticate === true ? <BoardItem/> : <Navigate to="/login"/>;
}

export default PrivateDetailRoute
