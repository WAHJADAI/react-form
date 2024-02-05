import { useEffect, useState } from 'react'
import InputsForm from '../entity/InputForm'

import axios from 'axios'

const Table = () => {
  const [datas, setDatas] = useState<InputsForm[]>([])
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get('http://localhost:3000/formData')
      .then((res) => setDatas(res.data))
      .catch((err) => setError(err.message))
  }, [])
  console.log(datas)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>classified</th>
              <th>priority</th>
              <th>relatedParties</th>
              <th>detail</th>
              <th>date</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {error && <p>{error}</p>}
            {datas.map((data) => (
              <tr key={data.id}>
                <th>{data.id}</th>
                <th>{data.name}</th>
                <th>{data.phone}</th>
                <th>{data.classified}</th>
                <th>{data.priority}</th>
                <th>{data.relatedParties}</th>
                <th>{data.detail}</th>
                <th>{data.date}</th>
                <th>{data.time}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
