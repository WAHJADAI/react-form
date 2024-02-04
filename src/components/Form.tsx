const Form = () => {
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
  return (
    <>
      <form action="" className="px-2">
        <div>การรับเรื่อง</div>
        <div className="flex my-2">
          <div className="px-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">วัน เวลา รับเรื่อง</span>
              </div>
              <div className="flex">
                <input
                  type="date"
                  placeholder="Select date"
                  className="input input-bordered w-full max-w-xs mx-2"
                />
                <input
                  type="time"
                  placeholder="Select time"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ช่องทาง</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
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
              <select className="select select-bordered w-80">
                <option value="volvo">Volvo</option>
              </select>
            </div>
            <div className="basis-2/5">
              <div className="label">
                <span className="label-text">ระดับความสำคัญ</span>
              </div>
              <select className="select select-bordered w-80">
                <option value="volvo">5</option>
              </select>
            </div>
          </div>
          <div className="label">
            <span className="label-text">ฝ่ายที่เกี่ยวข้อง</span>
          </div>
          <select className="select select-bordered w-5/6">
            <option value="volvo">หน่วยงาน</option>
          </select>
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea className="textarea textarea-bordered w-5/6"></textarea>
        </div>
        <div className="bg-gray-200 py-2 flex justify-center">
          <button className="btn bg-blue-500">บันทึก</button>
        </div>
      </form>
    </>
  )
}

export default Form
