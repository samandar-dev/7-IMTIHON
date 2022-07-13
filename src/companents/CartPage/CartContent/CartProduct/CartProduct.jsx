import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import productObj from '../../../../Object';
import useStore from '../../../../store/store';
import './CartProduct.scss'

// IMGS ==============================================

import eyeImg from '../../../../assets/Images/eye.png';
import refreshImg from '../../../../assets/Images/refresh.png';

function CartProduct() {

  const addCartFunc = useStore(state => state.addCartFunc)
  const shopModalFunc = useStore(state => state.shopModalFunc)
  const cartModalFunc = useStore(state => state.cartModalFunc)
  const cartModalItemsFunc = useStore(state => state.cartModalItemsFunc)
  const saveCartFunc = useStore(state => state.saveCartFunc)
  const removeSaveCartFunc = useStore(state => state.removeSaveCartFunc)

  const [producSlider, setProducSlider] = useState(1)
  const [producImgSlider, setProducImgSlider] = useState(1)
  const [weightAct, setWeightAct] = useState(1)
  const [saveAct, setSaveAct] = useState(true)

  const saveFunc = (id) => {
    console.log('aa');
    if (saveAct == true) {
      saveCartFunc(id)
      setSaveAct(false)
    }
    else {
      removeSaveCartFunc(id)
      setSaveAct(true)
    }
  }

  return (
    <>
      <div className="cartcontent__produc">
        <h3 className="cartcontent__produc-title">Featured cartcontent</h3>

        <button className='cartcontent__produc-slider-btn-left' onClick={() => producSlider > 1 ? setProducSlider(producSlider - 1) : 1}>
          <i class='bx bx-chevron-left' ></i>
        </button>
        <button className='cartcontent__produc-slider-btn-right' onClick={() => producSlider < 2 ? setProducSlider(producSlider + 1) : 2}>
          <i class='bx bx-chevron-right' ></i>
        </button>

        <div className="cartcontent__produc-slider-box">
          <ul className='cartcontent__produc-list' style={{
            transform: `translateX(-${producSlider * 240 - 240}px)`
          }}>
            {productObj.map((item, inx) => (
              inx + 1 <= 6 ?
                <Link to={`/cartPage/${item.id}`}>
                  <li className="cartcontent__produc-item">
                    <div className="cartcontent__produc-item-box">
                      <div className="cartcontent__produc-img-box">
                        <ul className='cartcontent__produc-img-list'
                          style={{
                            transform: `translateX(-${producImgSlider * 220 - 220}px)`
                          }}>

                          {item.productImg.map((img, inx) => (
                            <li className="cartcontent__produc-img-item">
                              <img src={img} alt="produc" />
                            </li>
                          ))}
                        </ul>

                        <button className='cartcontent__produc-img-slider-btn-left'
                          onClick={() => producImgSlider > 1 ? setProducImgSlider(producImgSlider - 1) : ""}>
                          <i className='bx bx-chevron-left' ></i>
                        </button>
                        <button className='cartcontent__produc-img-slider-btn-right'
                          onClick={() => producImgSlider < item.productImg.length ? setProducImgSlider(producImgSlider + 1) : ""}>
                          <i className='bx bx-chevron-right' ></i>
                        </button>

                        <button className='cartcontent__produc-heart-icon'
                          onClick={() => saveFunc(item.id)}>
                          <i className={`bx ${item.saveActive ? 'bxs-heart' : 'bx-heart'}`}
                            style={{ color: `${item.saveActive ? '#f52424' : ""}` }}>
                          </i>
                        </button>

                        {item.discount > 0 ?
                          <span className='products__produc-discount'>25%</span>
                          : ""}

                        <ul className="cartcontent__produc-hover-icons-list">
                          <li className="cartcontent__produc-hover-icons-item">
                            <button className='cartcontent__produc-hover-icons-btn'
                              onClick={() => (addCartFunc(item.id, shopModalFunc()))}>
                              <i className='bx bx-shopping-bag'></i>
                            </button>
                          </li>
                          <li className="cartcontent__produc-hover-icons-item">
                            <button className='cartcontent__produc-hover-icons-btn'
                              onClick={() => (cartModalFunc(), cartModalItemsFunc(item.id))}>
                              <img src={eyeImg} alt="eye icon" />
                            </button>
                          </li>
                          <li className="cartcontent__produc-hover-icons-item">
                            <button className='cartcontent__produc-hover-icons-btn'>
                              <img src={refreshImg} alt="refresh icon" />
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="cartcontent__produc-desc">
                        <p className='cartcontent__produc-name'>{item.name}</p>
                        <div>
                          <p className='cartcontent__produc-price'>
                            {item.discount !== 0 ? <span>${item.discount}.00</span> : ""}
                            ${item.weight.length > 1 ? item.price[weightAct - 1] : item.price[0]}.00
                          </p>

                          <ul className='cartcontent__produc-weight-list'>
                            {item.weight.map((weig, winx) => (
                              <li
                                className='cartcontent__produc-weight-item'
                                key={winx + 1}
                                onClick={() => setWeightAct(winx + 1)}>
                                <img src={weig} alt="weight" />
                              </li>

                            )).reverse()}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link> : ""
            ))}
            {/* ))} */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CartProduct
