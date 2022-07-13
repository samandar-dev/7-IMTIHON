import React from 'react'
import { useState } from 'react'
import productObj from '../../../Object'
import useStore from '../../../store/store'
import './Deal.scss'

function Deal() {

  const addCartFunc = useStore(state => state.addCartFunc)
  const shopModalFunc = useStore(state => state.shopModalFunc)

  const [dealSliderCount, setDealSliderCount] = useState(1)
  const sliderItems = productObj.filter(itm => itm.saleDays > 0)

  const addCart = (id) => {
    addCartFunc(id)
    shopModalFunc()
  }

  return (
    <>
      <section className='deal'>
        <div className="container">
          <div className="deal__inner">
            <div className="deal__left">
              <div className="deal__left-top">
                <h3 className='deal__left-title'>Deal of the Day</h3>

                <div className="deal__top-right">
                  <button className='deal__top-btn'
                    onClick={() => dealSliderCount > 1 ? setDealSliderCount(dealSliderCount - 1) : 1}>
                    <i className='bx bx-chevron-left'></i>Prev Deal
                  </button>
                  <span></span>
                  <button className='deal__top-btn deal__top-btn-next'
                    onClick={() => dealSliderCount < 5 ? setDealSliderCount(dealSliderCount + 1) : 5}>
                    Next Deal <i className='bx bx-chevron-right' ></i>
                  </button>
                </div>
              </div>

              <div className="deal__left-main">
                <ul className="deal__left-list" style={{
                  transform: `translateX(-${dealSliderCount * 830 - 830}px)`
                }}>
                  {productObj.map((itm, inx) => (
                    itm.saleDays > 0 ?
                      <li className="deal__left-item" key={inx + 1}>
                        <div className="deal__left-main-img-box">
                          <img src={itm.productImg[0]} alt="awd" />
                        </div>

                        <div className='deal__left-main-desc-box'>
                          <p className='deal__left-main-tit'>{itm.tit}</p>
                          <h4 className='deal__left-main-title'>{itm.name}</h4>
                          <p className='deal__left-main-price'><span>${itm.discount}.00</span> ${itm.price[0]}.00</p>

                          <div className="deal__left-main-sale-box">
                            <div>
                              <span>{itm.saleDays}</span>
                              <p>DAYS</p>
                            </div>
                            <div>
                              <span>{itm.saleHours}</span>
                              <p>HOURS</p>
                            </div>
                            <div>
                              <span>{itm.saleMinut}</span>
                              <p>MINS</p>
                            </div>
                            <div>
                              <span>{itm.saleSecound}</span>
                              <p>SECS</p>
                            </div>
                          </div>

                          <div className="deal__left-main-sold-box">
                            <div className='deal__left-main-sold-top'>
                              <p className='deal__left-main-sold'>Already Sold: <span>{itm.soldPrice}</span></p>
                              <p className='deal__left-main-residue'>Available: <span>{itm.residue}</span></p>
                            </div>

                            <div className='deal__left-main-sold-anim-box'>
                              <span></span>
                            </div>
                          </div>

                          <button className='deal__left-main-sold-add-btn' onClick={() => addCart(inx + 1)}>ADD TO CART</button>
                        </div>
                      </li> : ""
                  ))}
                </ul>
              </div>
            </div>

            <div className="deal__right">
              <ul className="deal__right-list" id='ww'
                style={{
                  transform: `translateY(-${dealSliderCount >= 2 ? 123 : 0}px)`
                }}>
                {sliderItems.map((item, inx) => (
                  <li
                    className={`deal__right-item ${inx + 1 === dealSliderCount ? 'dealItemAct' : ""}`} key={inx + 1} id={item.id}
                    onClick={() => setDealSliderCount(inx + 1)}
                  >
                    <div className="deal__right-item-img-box">
                      <img src={item.productImg[0]} alt="Violet Cauliflower" />
                    </div>
                    <div className='deal__right-item-desc'>
                      <p className='deal__right-item-title'>{item.name}</p>
                      <p className='deal__right-item-price'><span>${item.discount}.00</span> ${item.price}.00</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Deal
