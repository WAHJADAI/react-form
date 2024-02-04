import { Control, useWatch } from 'react-hook-form'
import InputsForm from '../entity/InputForm'

const Watch = ({ control }: { control: Control<InputsForm> }) => {
  const watchAll = useWatch({ control })

  return (
    <>
      <p>{watchAll.date}</p>
      <p>{watchAll.time}</p>
      <p>{watchAll.channel}</p>
      <p>{watchAll.name}</p>
      <p>{watchAll.phone}</p>
      <p>{watchAll.classified}</p>
      <p>{watchAll.priority}</p>
      <p>{watchAll.relatedParties}</p>
      <p>{watchAll.detail}</p>
    </>
  )
}

export default Watch
