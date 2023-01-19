import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Moviesinfo = () => {
    const [loding,setloding]=useState(true)
    const params=useParams()
    const [info,setinfo]=useState([])
    const nav = useNavigate()

    const infoA=async() => {
     setloding(true)
     let url=`https://www.omdbapi.com/?i=${params.id}&apikey=36e0ea63`
     const {data} = await axios.get(url)
     console.log(data);
     setinfo(data);
     setloding(false);
    }
    useEffect(()=> {
        infoA()
        
    },[])

  return (
    
        <div className='bg-dark'>
            {loding ? <h1 className='foundCss text-warning font-black text-center mt-2'>Loading...</h1> :
                <div className='container-fluid '>
                    <div className="container">
                        <div className="row mx-auto justify-center">
                            <div className='col-md-4  pt-4 mb-3 shadow '>
                                <img src={info.Poster} alt="" className='width="350" ' />
                            </div>
                            <div className=' col-md-7 pt-4 mb-5  text-md-start text-center text-white '>
                                <h2 className='font-bold mt-2'>{info.Title}</h2>
                                <p className='mt-2'>{info.Plot}</p>
                                <h6 className='mt-2'>Gener : {info.Genre}</h6>
                                <p className='mt-2'>Actors : {info.Actors}</p >
                                <div className='d-flex mt-3'>
                                    <div className='text-white bg-dark'>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className=''>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../half_star.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                <button onClick={() =>{
                                    nav(-1)
                                }} className='btn btn-warning text-light'>Back</button>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            }
         
        </div>
    
  )
}

export default Moviesinfo