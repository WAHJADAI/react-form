const Form = () => {
  return (
    <>
      <form action="">
        <div>การรับเรื่อง</div>
        <div>
          <div className="label">
            <span className="label-text">วัน เวลา รับเรื่อง</span>
          </div>
          <input
            type="date"
            placeholder="Select date"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="time"
            placeholder="Select time"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>ผู้แจ้งเรื่อง</div>
        <div>
          <div className="label">
            <span className="label-text">ชื่อ</span>
          </div>
          <input type="text" placeholder="ชื่อ และนามสกุลจริง" />
          <div className="label">
            <span>เบอร์โทรศัพท์</span>
          </div>
          <input type="text" placeholder="08xxxxxxxx" />
          <button type="button" className="btn">
            ตรวจสอบ
          </button>
        </div>
        <div>ข้อมูลผู้แจ้ง</div>
        <div>
          <div className="label">
            <span className="label-text">หมวดหมู่</span>
          </div>
          <select>
            <option value="volvo">Volvo</option>
          </select>
          <div className="label">
            <span className="label-text">ระดับความสำคัญ</span>
          </div>
          <select>
            <option value="volvo">5</option>
          </select>
          <div className="label">
            <span className="label-text">ฝ่ายที่เกี่ยวข้อง</span>
          </div>
          <select>
            <option value="volvo">หน่วยงาน</option>
          </select>
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea></textarea>
        </div>
        <button>บันทึก</button>
      </form>
    </>
  )
}

export default Form
