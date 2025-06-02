import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.jsx'
import Userlist from './userList.jsx'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/userlist' element={<Userlist/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
