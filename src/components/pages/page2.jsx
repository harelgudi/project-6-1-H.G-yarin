import React from 'react'
import { useRef } from 'react'
import { useNavigate} from 'react-router-dom'

const Page2 = () => {
const inputRef = useRef();
const nav = useNavigate();
  return (
    <div>
      <h1 onClick={() =>{
        nav(-1)
      }}>
      
      </h1>
      <div>
      <input className='form-control me-2' placeholder='search...' onKeyDown={(e) =>{
        if(e.key === "Enter"){
          nav("/" + inputRef.current.value);
        }
      }}
      ref = {inputRef}
       type="text" />
      </div>
    </div>
     
  )
}

export default Page2