
import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Page1 from './pages/page1'




const Main = () => {
  const [years, setYears] = useState([])
  const [moveis, setMoveis] = useState([])
  const [loading, setLoading] = useState(true);
  const params = useParams()
  const selectRef = useRef()
  const doApi = async () => {
    try {
      setLoading(true)
      console.log(moveis);
      let url = ` https://www.omdbapi.com/?s=${params.search || "bank"}&y=${years || 2020}&apikey=36e0ea63`
      const { data } = await axios.get(url)
      console.log(data.Search)
      setMoveis(data.Search);
      console.log(params.search);
      setLoading(false)

    } catch (err) {
      console.log(err)
    }
  }
  let selectYear = [];
  const selectYearA = () => {
    let year = new Date().getFullYear();
    for (let i = 0; i < 50; i++) {
      selectYear[i] = year - i;
    }
  }
  selectYearA();

  useEffect(() => {
    doApi()

  }, [params, years])



  return (
    <div className='bg-danger'>

      <div className='select p-2'>
        <select ref={selectRef} className="selectA w-100   text-center mt-1"
          onChange={() => {
            setYears(selectRef.current.value)
          }} >
          <option>Select Year...</option>
          {selectYear.map((item => {
            return (

              <option value={item}>{item}</option>
            )
          }))}
        </select>
      </div>

      <div className='bg-secondary'>
        {moveis ? (
          <div>
            {loading ? (
              <p className='bg-warning'>Loading...</p>
            ) : (
              <div className="container d-flex  ">
                <div className="d-flex flex-wrap justify-content-start ">
                  {moveis.map((item, i) => {
                    return <Page1 key={i} item={item} />;
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className='text-danger'> There is not results</p>
        )}
      </div>
    </div>
  );
}
export default Main