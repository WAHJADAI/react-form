import { useForm, SubmitHandler } from 'react-hook-form'
type InputsForm = {
  date: string
  time: string
  channel: string
  name: string
  phone: string
  classified: string
  priority: number
  relatedParties: string
  detail: string
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsForm>()
  const onSunmit: SubmitHandler<InputsForm> = (data) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSunmit)} className="px-2">
        <div>การรับเรื่อง</div>
        <div className="flex my-2">
          <div className="px-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">วัน เวลา รับเรื่อง</span>
              </div>
              <div className="flex gap-5">
                <div className="w-45">
                  <input
                    type="date"
                    placeholder="Select date"
                    className="input input-bordered w-full max-w-xs mx-2"
                    {...register('date', { required: true })}
                  />
                  {errors.date?.type === 'required' && (
                    <p className="text-red-500">Date is required.</p>
                  )}
                </div>
                <div>
                  <input
                    type="time"
                    placeholder="Select time"
                    className="input input-bordered w-full max-w-xs"
                    {...register('time', { required: true })}
                  />
                  {errors.time?.type === 'required' && (
                    <p className="text-red-500">Time is required.</p>
                  )}
                </div>
              </div>
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ช่องทาง</span>
            </div>
            <select className="select select-bordered" {...register('channel')}>
              <option value="ออนไลน์">ออนไลน์</option>
              <option value="ธรรมชาติ">ธรรมชาติ</option>
            </select>
          </label>
        </div>

        <div>ผู้แจ้งเรื่อง</div>
        <div className="flex gap-2 px-2">
          <div>
            <div className="label">
              <span className="label-text">ชื่อ</span>
            </div>
            <input
              type="text"
              placeholder="ชื่อ และนามสกุลจริง"
              className="input input-bordered w-full max-w-xs"
              {...register('name')}
            />
          </div>
          <div>
            <div className="label">
              <span className="label-text">เบอร์โทรศัพท์</span>
            </div>
            <input
              type="text"
              placeholder="08xxxxxxxx"
              className="input input-bordered w-full max-w-xs"
              {...register('phone')}
            />
          </div>
          <div className="flex items-end">
            <button type="button" className="btn bg-blue-500">
              ตรวจสอบ
            </button>
          </div>
        </div>

        <div>ข้อมูลผู้แจ้ง</div>
        <div className="px-2 gap-2">
          <div className="flex">
            <div className="basis-2/5 ">
              <div className="label">
                <span className="label-text">หมวดหมู่</span>
              </div>
              <select
                className="select select-bordered w-80"
                {...register('classified')}
              >
                <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
                <option value="หน่วยงานราชกาล">หน่วยงานราชกาล</option>
                <option value="องค์กรเอกชน">องค์กรเอกชน</option>
              </select>
            </div>
            <div className="basis-2/5">
              <div className="label">
                <span className="label-text">ระดับความสำคัญ</span>
              </div>
              <select
                className="select select-bordered w-80"
                {...register('priority')}
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div className="label">
            <span className="label-text">ฝ่ายที่เกี่ยวข้อง</span>
          </div>
          <select
            className="select select-bordered w-5/6"
            {...register('relatedParties')}
          >
            <option value="ฝ่ายบุคคล">ฝ่ายบุคคล</option>
            <option value="ฝ่ายบัญชี">ฝ่ายบัญชี</option>
            <option value="ฝ่าย IT">ฝ่าย IT</option>
          </select>
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-5/6"
            {...register('detail')}
          ></textarea>
        </div>
        <div className="bg-gray-200 py-2 flex justify-center">
          <button className="btn bg-blue-500">บันทึก</button>
        </div>
      </form>
    </>
  )
}

export default Form
