import { Control, useWatch } from 'react-hook-form'
import InputsForm from '../entity/InputForm'

const Watch = ({ control }: { control: Control<InputsForm> }) => {
  const watchAll = useWatch({ control })

  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="card  bg-slate-200 border-2 border-slate-300 w-4/6 p-2">
          <p>{watchAll.classified}</p>
          <p>{watchAll.date}</p>
          <p>{watchAll.time}</p>
          <p>{watchAll.channel}</p>
          <p>{watchAll.name}</p>
          <p>{watchAll.phone}</p>
          <p>{watchAll.priority}</p>
          <p>{watchAll.relatedParties}</p>
          <p>{watchAll.detail}</p>
        </div>
      </div>
    </>
  )
}

export default Watch
