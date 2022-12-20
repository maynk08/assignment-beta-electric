import React, { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios, { all } from 'axios'
import './AddPackage.css'
//https://api.npms.io/v2/search?q=reactjs

const AddPackages = () => {

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [texts,setTexts] = useState("")
  const [selected,setSelected] = useState("")
  
  const [err,setErr] = useState(false)
 
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  

  const handleClick = (e) => {
    e.preventDefault()
    //console.log(selected)
    if(texts=="" || selected==""){
      setErr(true)
    }

    else{

      let items = localStorage.getItem("packages")
      //console.log(items)
      if(items == null && err == false){
        localStorage.setItem("packages",JSON.stringify([selected]))
       
      }
  
      else{
        items = JSON.parse(items)
        let allItems = [...items,selected]
        localStorage.setItem("packages",JSON.stringify(allItems))
       
      }
         navigate('/')
    }


   

  
   
  }

  // useEffect(()=>{
   
  // },[packages])

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

  // useEffect(()=>{
  //   navigate('/')
  // },[localStorage.setItem("packages")])

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

    {
      err==true ?  <p style={{color:"red"}} > <b> Error !! You have to select a package and add reason !! </b></p> : <p>{""}</p>
    }
  
  
    <button onClick={handleClick}> <b> Add Package + </b> </button>

  {console.log(selected)}
  
    </>
  )
}

export default AddPackages