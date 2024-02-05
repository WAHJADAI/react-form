import './App.css'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <div className="grid  grid-row-2 w-screen">
        <div className="col-span-2">
          <Nav />
        </div>

        <div>
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
