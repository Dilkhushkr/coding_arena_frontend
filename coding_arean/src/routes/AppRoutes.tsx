import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../page/login'

type Props = {}

const AppRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
export default AppRoutes