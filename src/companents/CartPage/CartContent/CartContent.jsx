import React, { useEffect } from 'react'
import { useState } from 'react';
import productObj from '../../../Object';
import useStore from '../../../store/store';
import { Link, useLocation } from 'react-router-dom';
import CartDescription from './CartDescription/CartDescription';
import './CartContent.scss'

// IMGS =========================================================

import CartProduct from './CartProduct/CartProduct';
import star from '../../../assets/Images/star-icon.jpg';
import company from '../../../assets/Images/company.png';
import refreshImg from '../../../assets/Images/refresh.png';
import shipping from '../../../assets/Images/shipping-icon.jpg';

function CartContent() {
  const ulocation = useLocation()

  const [cartId, setCartId] = useState(+ulocation.pathname.split('/').at(-1))
  const [cartImgLupX, setCartImgLupX] = useState(0)
  const [cartImgLupY, setCartImgLupY] = useState(0)
  const [cartSlider, setCartSlider] = useState(1)
  const [saveAct, setSaveAct] = useState(true)
  const [weightAct, setWeightAct] = useState(1)

  const addCartFunc = useStore(state => state.addCartFunc)
  const removeCartCountFunc = useStore(state => state.removeCartCountFunc)
  const shopModalFunc = useStore(state => state.shopModalFunc)
  const cartCount = useStore(state => state.cartCount)
  const saveCartFunc = useStore(state => state.saveCartFunc)
  const removeSaveCartFunc = useStore(state => state.removeSaveCartFunc)

  const cartImgLupMoveHandler = (e) => {
    setCartImgLupX(e.screenX / 5)
    setCartImgLupY(e.screenY / 5)
  }

  const cartImgLupUpHandler = () => {
    setCartImgLupX(0)
    setCartImgLupY(0)
  }

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

  useEffect(() => {
    setCartId(+ulocation.pathname.split('/').at(-1))
  }, [+ulocation.pathname.split('/').at(-1)]);

  return (
    <>
      <section className='cartcontent'>
        <div className="container">
          <div className="cartcontent__inner">
            {productObj.map((item, inx) => {
              if (item.id === cartId) {
                return (
                  <ul className="cartcontent__list">
                    <li className="cartcontent__item cartItemAct">
                      <div className="cartcontent__cart">
                        <div className="cartcontent__cart-top">
                          <ul className="cartcontent__list-slider-list">
                            {item.productImg.map((item, imInx) => (
                              <li className={`cartcontent__list-slider-item ${cartSlider === imInx + 1 ? "slidAct" : ""}`}
                                onClick={() => setCartSlider(imInx + 1)}>
                                <img src={item} alt="cart slider items" />
                              </li>
                            ))}
                          </ul>

                          <div className="cartcontent__carts">
                            <ul className="cartcontent__carts-list" style={{
                              transform: `translateY(-${cartSlider * 570 - 570}px)`
                            }}>
                              {item.productImg.map((pImg, imInx) => (
                                <li className="cartcontent__carts-item" onMouseMove={cartImgLupMoveHandler} onMouseOut={cartImgLupUpHandler}>
                                  <img src={pImg} alt="cart" style={{
                                    transform: `translate(-${cartImgLupX}px, -${cartImgLupY}px) scale(${cartImgLupX > 0 ? 2 : 1})`
                                  }} />
                                  {imInx + 1 <= 1 ?
                                    <>
                                      <button className='cartcontent__carts-save-btn'
                                        onClick={() => saveFunc(item.id)}>
                                        <i className={`bx ${item.saveActive ? 'bxs-heart' : 'bx-heart'}`}
                                          style={{ color: `${item.saveActive ? '#f52424' : ""}` }}>
                                        </i>
                                      </button>
                                      <button className='cartcontent__carts-refresh-btn'>
                                        <img src={refreshImg} alt="" />
                                      </button>
                                      <span className='cartcontent__carts-scidka'>-30%</span>
                                    </>
                                    : ""}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="cartcontent__cart-desc">
                            <div className="cartcontent__cart-desc-title-slider-bnt">
                              <h3 className="cartcontent__cart-desc-title">{item.name}</h3>
                              <div>
                                {cartId <= 1 ? "" :
                                  <button className='cartcontent__cart-desc-left-btn'
                                    onClick={() => cartId > 1 ? setCartId(cartId - 1) : 1}>
                                    <i class='bx bx-chevron-left' ></i>
                                  </button>
                                }
                                {cartId >= 33 ? "" :
                                  <button className='cartcontent__cart-desc-right-btn'
                                    onClick={() => cartId <= 33 ? setCartId(cartId + 1) : 33}>
                                    <i class='bx bx-chevron-right' ></i>
                                  </button>
                                }
                              </div>
                            </div>
                            {item.startAct &&
                              <div className="carcontent__cart-desc-rating-img">
                                <img className='cartcontent__cart-desc-rating' src={star} alt="" />
                                <span>(1 customer review)</span>
                              </div>
                            }

                            <p className="cartcontent__cart-desc-price">
                              {item.discount > 0 ? <span>${item.discount}.00</span> : " "} ${item.price[item.price.length - 1]}.00
                            </p>

                            {item.residue > 0 ?
                              <p className='cartcontent__cart-dsec-sold'>
                                <i class='bx bxs-flame bx-flashing' style={{ color: '#e29548' }} ></i> 13 sold in last 9 hours
                              </p>
                              : ""}

                            <p className='cartcontent__cart-desc-text'>{item.desc}</p>

                            {item.weight.length > 0 ?
                              <div className="cartcontent__cart-desc-weigh">
                                <p className="cartcontent__cart-desc-weigh-title">
                                  WEIGHT:
                                  {weightAct == 1 ? <span> 1KG</span> : ""}
                                  {weightAct == 2 ? <span> 500KG</span> : ""}
                                  {weightAct == 3 ? <span> 250KG</span> : ""}
                                </p>

                                <ul className="cartcontent__cart-desc-weigh-list">
                                  {item.weight.map((weig, wInx) => (
                                    <li className={`cartcontent__cart-desc-weigh-item ${weightAct === wInx + 1 ? "cartdescWeighAct" : ""}`}
                                      key={wInx + 1}
                                      onClick={() => setWeightAct(wInx + 1)}>
                                      <img src={weig} alt="weig" />
                                    </li>
                                  )).reverse()}
                                </ul>
                                <button className='cartcontent__cart-desc-weigh-clear-btn'>CLEAR</button>
                                <p className='cartcontent__cart-desc-weigh-price'>${item.price[weightAct - 1]}.00</p>
                              </div>
                              : ""}

                            {item.saleDays > 0 ?
                              <div className="cartcontent__cart-desc-time-box">
                                <p className='cartcontent__cart-desc-time-title'><i class='bx bx-alarm' ></i> Hurry up! Sale end in:</p>
                                <ul className='cartmodal__sale-list'>
                                  <li className="cartmodal__sale-item">
                                    <span>173</span>
                                    <p>DAYS</p>
                                  </li>
                                  <li className="cartmodal__sale-item">
                                    <span>03</span>
                                    <p>HOURSE</p>
                                  </li>
                                  <li className="cartmodal__sale-item">
                                    <span>21</span>
                                    <p>MINS</p>
                                  </li>
                                  <li className="cartmodal__sale-item">
                                    <span>40</span>
                                    <p>SECS</p>
                                  </li>
                                </ul>
                              </div>
                              : ""}

                            {item.residue > 0 ?
                              <div className="cartmodal__anims">
                                <p className='cartmodal__sold-tit'>Only <span>{item.residue}</span> item(s) left in stock.</p>

                                <div className="cartmodal__anim-box">
                                  <span className="cartAnim"></span>
                                </div>
                              </div>
                              : ""}

                            <div className="cartmodal__add-cart">
                              <div className="cartmodal__add-cart-box">
                                <input type="number" name='number'
                                  value={cartCount}
                                />
                                <div>
                                  <button onClick={() => addCartFunc(item.id)}>+</button>
                                  <button onClick={() => removeCartCountFunc(item.id)}>-</button>
                                </div>
                              </div>

                              <button className='cartmodal__add-btn' onClick={() => (addCartFunc(item.id), shopModalFunc())}>ADD TO CART</button>
                              <button className='cartmodal__buy-now-btn' >BUY NOW</button>
                            </div>

                            <ul className="cartcontent__cart-desc-list">
                              <li className="cartcontent__cart-desc-item">
                                <p className='cartcontent__cart-desc-tit'>
                                  <i class='bx bx-link-external'></i> Delivery & Return
                                </p>
                                <p className="cartcontent__cart-desc-tit"><span>|</span>
                                  <i class='bx bx-help-circle' ></i>Ask a Question
                                </p>
                              </li>
                              <li className="cartcontent__cart-desc-item">
                                <p className='cartcontent__cart-desc-tit'>
                                  <img src={shipping} alt="shipping icon" /> Estimated Delivery: <span>Jul 15 – Jul 19</span>
                                </p>
                              </li>
                              <li className="cartcontent__cart-desc-item">
                                <p className='cartcontent__cart-desc-tit'>
                                  <i className='bx bx-smile bx-flashing' ></i> 57 people <span>are viewing this right now</span>
                                </p>
                              </li>
                            </ul>

                            <ul className="cartcontent__cart-desc-link-list">
                              <li className="cartcontent__cart-desc-links-item">
                                <Link to={'/'}>
                                  <i className='bx bx-share-alt' ></i> <span>Share</span>
                                </Link>
                              </li>
                              <li className="cartcontent__cart-desc-links-item">
                                <Link to={'/'}>
                                  <i className='bx bxl-twitter'></i>
                                </Link>
                              </li>
                              <li className="cartcontent__cart-desc-links-item">
                                <Link to={'/'}>
                                  <i className='bx bxl-facebook'></i>
                                </Link>
                              </li>
                              <li className="cartcontent__cart-desc-links-item">
                                <Link to={'/'}>
                                  <i className='bx bxl-telegram' ></i>
                                </Link>
                              </li>
                              <li className="cartcontent__cart-desc-links-item">
                                <Link to={'/'}>
                                  <i class='bx bx-envelope' ></i>
                                </Link>
                              </li>
                            </ul>

                            <div className="cartcontent__cart-desc-company-img">
                              <p className='cartcontent__cart-desc-company-title'>Guaranteed Safe Checkout</p>
                              <img src={company} alt="company" />
                            </div>
                          </div>
                        </div>

                        <CartDescription />
                        <CartProduct />
                      </div>
                    </li>
                  </ul>
                )
              }
            })}
          </div>
        </div >
      </section >
    </>
  )
}

export default CartContent
