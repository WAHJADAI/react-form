import './App.css'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <div className="grid  grid-row-2">
        <div>
          <Nav />
        </div>

        <div>
          <Form />
        </div>
      </div>

      <p className="text-red-500 text-3xl"> app </p>
    </>
  )
}

export default App
