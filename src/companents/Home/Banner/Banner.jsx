import React from 'react'
import './Banner.scss'

import banner1 from '../../../assets/Images/banner/banner1.jpg'
import banner2 from '../../../assets/Images/banner/banner2.jpg'
import banner3 from '../../../assets/Images/banner/banner3.jpg'

function Banner() {
  return (
    <>
      <section className='banner'>
        <div className="container">
          <ul className="banner__list">
            <li className="banner__item">
              <div className="banner__item-box">
                <div className="banner__item-desc">
                  <h4>Joobie <br /> Ice Cream</h4>
                  <p>Sale Off 25%</p>
                  <span>Shop Now</span>
                </div>
                <img src={banner1} alt="banner" />
              </div>
            </li>
            <li className="banner__item">
              <div className="banner__item-box">
                <div className="banner__item-desc">
                  <h4>Fresh <br /> Guava Juice</h4>
                  <span>Shop Now</span>
                </div>
                <img src={banner2} alt="banner" />
              </div>
            </li>
            <li className="banner__item">
              <div className="banner__item-box">
                <div className="banner__item-desc">
                  <h4>Fresh <br /> Vegeitables</h4>
                  <span>Shop Now</span>
                </div>
                <img src={banner3} alt="banner" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Banner
