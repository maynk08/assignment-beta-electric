import React, { useEffect, useState } from 'react'
import useNavigate from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    let packages = JSON.parse(localStorage.getItem("packages"))
    setData(packages)
  },[])

  const handleClick = () => {
    localStorage.removeItem()
  }
  return (
    <>
    <h3>All favourite npm packages👇</h3>
     <div className="App">
      <table>
        <tr>
          <th>Package_name</th>
          <th>Action</th>
        </tr>
        {console.log(data,data.length)}
      {data.map((val,key)=>
      <>
      <tr key={key}>
        <td>
          <b>{val}</b>
        </td>
        <td onClick={handleClick}>
          <b>Delete</b>
        </td>
      </tr>
      </>)}
          
       
        </table>

        <button onClick={()=>navigate('/AddPackage')}> <b>Add more +</b> </button>
    
    </div>

    </>
  )
}

export default Home