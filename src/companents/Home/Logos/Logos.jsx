import React from 'react'
import './Logos.scss'

import logo1 from '../../../assets/Images/logos/logo1.jpg'
import logo2 from '../../../assets/Images/logos/logo2.jpg'
import logo3 from '../../../assets/Images/logos/logo3.jpg'
import logo4 from '../../../assets/Images/logos/logo4.jpg'
import logo5 from '../../../assets/Images/logos/logo5.jpg'
import logo6 from '../../../assets/Images/logos/logo6.jpg'
import { useState } from 'react'

function Logos() {

  const logosObj = [
    {
      id: 1,
      img: logo1,
    },
    {
      id: 2,
      img: logo2,
    },
    {
      id: 3,
      img: logo3,
    },
    {
      id: 4,
      img: logo4,
    },
    {
      id: 5,
      img: logo5,
    },
    {
      id: 6,
      img: logo6,
    },
    {
      id: 7,
      img: logo4,
    }
  ]

  const [logossliderCount, setLogosSliderCount] = useState(1)

  return (
    <>
      <section className='logos'>
        <div className="container">
          <div className="logos__inner">
            <ul className="logos__list" style={{
              transform: `translateX(-${logossliderCount * 200 - 200}px)`
            }}>
              {logosObj.map((item, inx) => (
                <li className="logos__item" key={inx + 1}>
                  <img src={item.img} alt="logo one" />
                </li>
              ))}
            </ul>
            <button className='logos__slider-btn-left'
              onClick={() => logossliderCount > 1 ? setLogosSliderCount(logossliderCount - 1) : 1}>
              <i className='bx bx-chevron-left' ></i>
            </button>
            <button className='logos__slider-btn-right'
              onClick={() => logossliderCount < 2 ? setLogosSliderCount(logossliderCount + 1) : 2}>
              <i className='bx bx-chevron-right' ></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Logos
