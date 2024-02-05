import { Outlet } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'

function App() {
  return (
    <>
      <div className="grid  grid-row-2 w-screen">
        <div className="col-span-2">
          <Nav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
