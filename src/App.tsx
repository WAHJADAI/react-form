import './App.css'
import Form from './components/Form'

function App() {
  return (
    <>
      {/* <div className="grid grid-cols-1">
        <div className="bg-violet-700 ">Nav</div>
        <div className="grid grid-cols-2">
          <div className="bg-red-500">status</div>
          <div className="grid grid-rows-2">
            <div>form</div>
            <div>button</div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-3 grid-row-3">
        <div className="bg-violet-700 col-span-3">nav</div>
        <div className="bg-red-500 col-span-1 row-span-2">status</div>
        <div className="  col-span-2 row-span-2">
          <Form />
        </div>
      </div>
      <p className="text-red-500 text-3xl"> app </p>
    </>
  )
}

export default App
