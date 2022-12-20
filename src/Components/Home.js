import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import useNavigate from 'react-router-dom'

import './Home.css'

const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [flag,setFlag] = useState(false)

  useEffect(() => {
    let packages = (localStorage.getItem("packages"))
   // console.log(typeof (packages))
    if (packages != null) {

      packages = JSON.parse(packages)
      setData(packages)
      
    }
  }, [])

 

  const handleAddClick = () => {
    navigate('/AddPackages')
  }

  const handleDelete = (index,e) => {

    setData(data.filter((v, i) => i !== index))
    localStorage.setItem("packages",JSON.stringify(data))
   
}




  return (
    <>
    <hr />
      <h3>All your favourite npm package list </h3>
      <hr />
      <div className="Table-data">
        {console.log(data)}
        {data.length > 0 ?
          <table>
            <tr>
              <th>Package_name</th>
              <th>Action</th>
            </tr>

            {data.map((val, key) =>
              <>
                <tr key={key}>
                  <td>
                    <b>{val}</b>
                  </td>
                  <td>
                    <button onClick={e => handleDelete(key,e)} >Delete</button>
                  </td>
                </tr>
              </>)}


          </table> :
          <>
            <div className='no-data'><b>No Favourite package added yet !</b></div>
            <br />
          </>


        }


        <button className="add-pkg" onClick={handleAddClick}> <b>Add+</b> </button>

      </div>

    </>
  )
}

export default Home