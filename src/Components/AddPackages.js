import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AddPackage.css'
//https://api.npms.io/v2/search?q=reactjs

const AddPackages = () => {

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [texts,setTexts] = useState("")
  const [selected,setSelected] = useState("")
  const [packages,setPackage] = useState(new Set())
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  

  const handleClick = (e) => {
    e.preventDefault()
    //console.log(selected)

    setPackage([...packages,selected])
   
  localStorage.setItem("packages",JSON.stringify(packages))
  
  }

  useEffect(() => {

    const getData = async () => {
      setLoading(true)
      const response = await axios.get(`https://api.npms.io/v2/search?q=${search}`)
      // console.log(response).
      setData(response.data.results)
      setLoading(false)
    }
    getData()
  }, [search])

  return (
    <>
    <h3>Make list of your favourite packages 👇</h3>
    <div className='main-container'>

      <input
      className='input-field'
       type="text" 
       placeholder='Search for packages...' 
       value={search} 
       onChange={handleChange} 
       />
      <br /><br />

      {data.map((packages) => <>

        <input type="radio"
        name = "npm-package"
        onClick={()=>setSelected(packages.package.name)} />
        <label>{packages.package.name}</label>
        <br />

      </>)}


    </div>

    <p> <b>Why this is your favourite ?</b> </p>

    <textarea 
    className='textArea'
     cols="200" 
     rows="05"
     value = {texts}
     onChange = {(e)=>setTexts(e.target.value)}
    ></textarea>

    <button onClick={handleClick}> <b> Add Package + </b> </button>

  {console.log(selected)}
  
    </>
  )
}

export default AddPackages