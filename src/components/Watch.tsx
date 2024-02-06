import { Control, useWatch } from 'react-hook-form'
import InputsForm from '../entity/InputForm'

const Watch = ({ control }: { control: Control<InputsForm> }) => {
  const watchAll = useWatch({
    control,
    defaultValue: { classified: 'ยังไม่ระบุหมวดหมู่' },
  })

  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="card  bg-slate-200 border-2 border-slate-300 w-4/5 p-2 text-wrap">
          <p>{watchAll.classified}</p>
          <p>วันที่:{watchAll.date}</p>
          <p>เวลา:{watchAll.time}</p>
          <p>ช่องทาง:{watchAll.channel}</p>
          <p>ชื่อ:{watchAll.name}</p>
          <p>เบอร์โทรศัพท์:{watchAll.phone}</p>
          <p>ความสำคัญ:{watchAll.priority}</p>
          <p>ฝ่ายที่เกี่ยวข้อง:{watchAll.relatedParties}</p>
          <p>
            รายละเอียด:
            {watchAll.detail}
          </p>
        </div>
      </div>
    </>
  )
}

export default Watch
