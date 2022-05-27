import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from '../App';
import UsersDetails from '../components/UsersDetails';

function routes() {
  return (
    <>
<Router>
      <Routes>
          <Route  path="/" element = {<App />} />
          <Route  path="/details/:id" element = {<UsersDetails />} />
      </Routes>
   </Router>
    </>
  )
}

export default routes