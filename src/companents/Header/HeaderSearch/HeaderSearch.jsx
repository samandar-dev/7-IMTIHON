import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import productObj from '../../../Object'
import './HeaderSearch.scss'

function HeaderSearch({ searchModal, setSearchModal }) {
  const [searchArr, setSearchArr] = useState([])
  const searchRef = useRef(null)

  const searchFunc = (e) => {
    searchRef.current.value !== ''
      ? setSearchArr(productObj.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
      : setSearchArr([])
  }

  return (
    <>
      <div className="header__search-box">
        <form className='header__search-form'>
          <input
            type="text"
            name='search'
            id='headerSearch'
            placeholder={`I'm shopping for ...`}
            onChange={searchFunc}
            ref={searchRef}
          />
          <button type='submit'>SEARCH <i className='bx bx-search'></i></button>
        </form>
        <ul className={`header__search-list ${searchArr.length >= 1 ? "searchList" : ""}`}>
          {searchArr.map(item => (
            <Link to={`/cartPage/${item.id}`}>
              <li className="header__search-item">
                <div className="header__search-img-box">
                  <img src={item.productImg[0]} alt={item.name} />
                </div>
                <div className="header__search-item-desc">
                  <p className='header__search-item-name'>{item.name}</p>
                  <p className='header__search-item-price'>
                    {item.discount !== 0 ? <span>${item.discount}.00</span> : ""} ${item.price[item.price.length - 1]}.00
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* RESPON SEARCH MODAL ================================ */}

      <div className={`search-modal ${searchModal ? 'searchModalOpen' : ""}`}>
        <div className='search-modal__bacdrop' onClick={() => setSearchModal(!searchModal)}></div>

        <div className={`search-modal__inner ${searchModal ? 'searchModalInnerBox' : ""}`}>
          <input
            type="text"
            name="search"
            id="searchModal"
            placeholder={`I'm shopping for ...`}
          />
          <button className='search-modal-remov-btn' onClick={() => setSearchModal(!searchModal)}>
            <i className='bx bx-x' ></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default HeaderSearch
