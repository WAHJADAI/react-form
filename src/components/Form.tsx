import { SubmitHandler, useForm } from 'react-hook-form'
import InputsForm from '../entity/InputForm'
import Watch from './Watch'
import axios from 'axios'

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsForm>()

  const onSunmit: SubmitHandler<InputsForm> = (data) =>
    axios.post('http://localhost:3000/formData', data).then(() => {
      alert('บันทึกสำเร็จ')
    })
  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <Watch control={control} />
        </div>
        <form onSubmit={handleSubmit(onSunmit)} className="col-span-2 ">
          <p>การรับเรื่อง</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 my-2">
            <label className="form-control w-full max-w-xs grid grid-cols-2">
              <div className="label">
                <span className="label-text">
                  วัน เวลา รับเรื่อง<span className="text-red-500">*</span>
                </span>
              </div>

              <input
                type="date"
                placeholder="Select date"
                className="input input-bordered w-full max-w-xs mx-2 col-start-1 col-end-2"
                {...register('date', { required: true })}
              />

              <input
                type="time"
                placeholder="Select time"
                className="input input-bordered w-full max-w-xs mx-3"
                {...register('time', { required: true })}
              />
              {errors.date?.type === 'required' && (
                <p className="text-red-500">Date is required.</p>
              )}
              {errors.time?.type === 'required' && (
                <p className="text-red-500">Time is required.</p>
              )}
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  ช่องทาง<span className="text-red-500">*</span>
                </span>
              </div>
              <select
                className="select select-bordered"
                {...register('channel', { required: true })}
              >
                <option value="ออนไลน์">ออนไลน์</option>
                <option value="ธรรมชาติ">ธรรมชาติ</option>
              </select>
              {errors.channel?.type === 'required' && (
                <p className="text-red-500">Channel is required.</p>
              )}
            </label>
          </div>

          <p>ผู้แจ้งเรื่อง</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-2 px-2">
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
                className="input input-bordered mr-4 max-w-xs"
                {...register('phone')}
              />
              <button type="button" className="btn bg-blue-500">
                ตรวจสอบ
              </button>
            </div>
          </div>

          <div>ข้อมูลผู้แจ้ง</div>

          <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            <div>
              <div className="label">
                <span className="label-text">หมวดหมู่</span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register('classified')}
              >
                <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
                <option value="หน่วยงานราชกาล">หน่วยงานราชกาล</option>
                <option value="องค์กรเอกชน">องค์กรเอกชน</option>
              </select>
            </div>
            <div>
              <div className="label">
                <span className="label-text">
                  ระดับความสำคัญ <span className="text-red-500">*</span>
                </span>
              </div>
              <select
                className="select select-bordered w-full "
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
            <span className="label-text">
              ฝ่ายที่เกี่ยวข้อง<span className="text-red-500">*</span>
            </span>
          </div>
          <select
            className="select select-bordered w-5/6"
            {...register('relatedParties', { required: true })}
          >
            <option value="ฝ่ายบุคคล">ฝ่ายบุคคล</option>
            <option value="ฝ่ายบัญชี">ฝ่ายบัญชี</option>
            <option value="ฝ่าย IT">ฝ่าย IT</option>
          </select>
          {errors.relatedParties?.type === 'required' && (
            <p className="text-red-500">related parties is required.</p>
          )}
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-5/6"
            {...register('detail')}
          ></textarea>

          <div className="bg-gray-200  flex justify-center relative bottom-0 w-full">
            <button className="btn bg-blue-500">บันทึก</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
