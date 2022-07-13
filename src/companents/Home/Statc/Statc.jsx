import React from 'react'
import useStore from '../../../store/store'
import './Statc.scss'

// IMGS ==========================================

import starIcon from '../../../assets/Images/star-icon.jpg'
import productObj from '../../../Object'

function Statc() {
  const cartModalFunc = useStore(state => state.cartModalFunc)
  const cartModalItemsFunc = useStore(state => state.cartModalItemsFunc)

  return (
    <>
      <section className='statc'>
        <div className="container">
          <div className="statc__inner">
            <div className="statc__menu-box">
              <h4 className='statc__menu-title'>Top Rated</h4>
              <ul className="statc__menu-list">
                {productObj.map((item, inx) => (
                  inx + 1 <= 3 ?
                    <li className="statc__menu-item">
                      <div className="statc__menu-item-img-box">
                        <img src={item.productImg[0]} alt="produc" />
                        <span className='statc__menu-item-icon' onClick={() => (cartModalFunc(), cartModalItemsFunc(item.id))}>
                          <i className='bx bx-expand'></i>
                        </span>
                        <div className="statc__menu-item-hover-box"></div>
                      </div>
                      <div className="statc__menu-item-desc">
                        <p className="statc__menu-item-name">{item.name}</p>
                        <div className='statc__menu-item-star-box'>
                          <img src={starIcon} alt="starIcon" />
                        </div>
                        <p className="statc__menu-item-price">
                          {item.discount > 0 ? <span>${item.discount}.00</span> : ""} $12.00
                        </p>
                      </div>
                    </li> : ""
                ))}
              </ul>
            </div>
            <div className="statc__menu-box">
              <h4 className='statc__menu-title'>Best Selling</h4>
              <ul className="statc__menu-list">
                {productObj.map((item, inx) => (
                  inx + 1 >= 4 && inx + 1 <= 6 ?
                    <li className="statc__menu-item">
                      <div className="statc__menu-item-img-box">
                        <img src={item.productImg[0]} alt="produc" />
                        <span className='statc__menu-item-icon' onClick={() => (cartModalFunc(), cartModalItemsFunc(item.id))}>
                          <i className='bx bx-expand'></i>
                        </span>
                        <div className="statc__menu-item-hover-box"></div>
                      </div>
                      <div className="statc__menu-item-desc">
                        <p className="statc__menu-item-name">{item.name}</p>
                        <div className='statc__menu-item-star-box'>
                          <img src={starIcon} alt="starIcon" />
                        </div>
                        <p className="statc__menu-item-price">
                          {item.discount > 0 ? <span>${item.discount}</span> : ""} $12.00
                        </p>
                      </div>
                    </li> : ""
                ))}
              </ul>
            </div>
            <div className="statc__menu-box">
              <h4 className='statc__menu-title'>On Sales</h4>
              <ul className="statc__menu-list">
                {productObj.map((item, inx) => (
                  inx + 1 >= 9 && inx + 1 <= 11 ?
                    <li className="statc__menu-item">
                      <div className="statc__menu-item-img-box">
                        <img src={item.productImg[0]} alt="produc" />
                        <span className='statc__menu-item-icon' onClick={() => (cartModalFunc(), cartModalItemsFunc(item.id))}>
                          <i className='bx bx-expand'></i>
                        </span>
                        <div className="statc__menu-item-hover-box"></div>
                      </div>
                      <div className="statc__menu-item-desc">
                        <p className="statc__menu-item-name">{item.name}</p>
                        <div className='statc__menu-item-star-box'>
                          <img src={starIcon} alt="starIcon" />
                        </div>
                        <p className="statc__menu-item-price">
                          {item.discount > 0 ? <span>${item.discount}</span> : ""} $12.00
                        </p>
                      </div>
                    </li> : ""
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statc
