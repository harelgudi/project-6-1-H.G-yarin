import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from './carousel'

const Header = () => {
  const nav = useNavigate();
  const inputRef = useRef();
  return (
    <div>
      <nav className='navbar bg-body-tertiary bg-danger d-flex align-items-center justify-content-between'>
        <div className='container-fluid'>
          <Link className="navbar-brand" to={"/"}>Movis</Link>

          <form className='d-flex col-2 col-lg-3' role="search">
            <input className='form-control' placeholder='search...' onKeyDown={(e) => {
              if (e.key === "Enter") {
                nav("/" + inputRef.current.value);
              }
            }}
              ref={inputRef}
              type="text" />
            <button className='btn btn-outline-success' type="submit">Search</button>
          </form>

        </div>
      </nav>
      <Carousel />
    </div>
  )
}

export default Header