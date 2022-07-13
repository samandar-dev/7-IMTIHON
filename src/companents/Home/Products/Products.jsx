import React, { useEffect, useState } from 'react'
import productObj from '../../../Object'
import useStore from '../../../store/store'
import './Products.scss'

// IMGS ================================================

import imgIcon1 from '../../../assets/Images/products/orange.jpg'
import imgIcon2 from '../../../assets/Images/products/cailifower.png'
import imgIcon3 from '../../../assets/Images/products/milik-creem.png'
import imgIcon4 from '../../../assets/Images/products/banana.png'
import imgIcon5 from '../../../assets/Images/products/see-food.png'
import eyeImg from '../../../assets/Images/eye.png'
import refreshImg from '../../../assets/Images/refresh.png'

function Products() {

  const [categorItems, setCategorItems] = useState(productObj)
  const [saveAct, setSaveAct] = useState(true)

  const saveArr = useStore(state => state.saveArr)
  const saveCartItem = useStore(state => state.saveCartFunc)
  const shopModalFunc = useStore(state => state.shopModalFunc)
  const cartModalFunc = useStore(state => state.cartModalFunc)
  const addCartItemCount = useStore(state => state.addCartFunc)
  const removeSaveCartFunc = useStore(state => state.removeSaveCartFunc)
  const cartModalItemsFunc = useStore(state => state.cartModalItemsFunc)

  const addCart = (id) => {
    addCartItemCount(id)
    shopModalFunc()
  }

  const saveFunc = (id) => {
    if (saveAct == true) {
      saveCartItem(id)
      setSaveAct(false)
    }
    else {
      removeSaveCartFunc(id)
      setSaveAct(true)
    }
  }

  const [categorTitle, setCategorTitle] = useState('fruit')
  const [weightAct, setWeightAct] = useState(3)

  const [producItemSlider1, setProducItemSlider1] = useState(1)

  useEffect(() => {
    setCategorItems(productObj)
  }, [categorItems, saveArr, saveAct]);

  return (
    <>
      <section className='products'>
        <div className="container">
          <div className="products__inner">
            <div className="products__top">
              <h3 className="products__title">Featured Products</h3>

              <ul className="products__categor-list">
                <li className={`products__categor-item ${categorTitle === 'fruit' ? "categorAct" : ""}`}
                  onClick={() => setCategorTitle('fruit')}>

                  <img src={imgIcon1} alt="orange" />
                  <p>Fruits</p>
                </li>
                <li className={`products__categor-item ${categorTitle === 'vegetables' ? "categorAct" : ""}`}
                  onClick={() => setCategorTitle('vegetables')}>

                  <img src={imgIcon2} alt="orange" />
                  <p>Vegetables</p>
                </li>
                <li className={`products__categor-item ${categorTitle === 'milik&cream' ? "categorAct" : ""}`}
                  onClick={() => setCategorTitle('milik&cream')}>

                  <img src={imgIcon3} alt="orange" />
                  <p>Milk & Cream</p>
                </li>
                <li className={`products__categor-item ${categorTitle === 'banana' ? "categorAct" : ""}`}
                  onClick={() => setCategorTitle('banana')}>

                  <img src={imgIcon4} alt="orange" />
                  <p>Banana</p>
                </li>
                <li className={`products__categor-item ${categorTitle === 'seaFood' ? "categorAct" : ""}`}
                  onClick={() => setCategorTitle('seaFood')}>

                  <img src={imgIcon5} alt="orange" />
                  <p>Sea Food</p>
                </li>
              </ul>
            </div>

            <ul className='products__produc-list'>
              {categorItems.map((item, i) => (
                `${item.categor.filter(itm => itm === categorTitle)}` ?

                  <li className='products__produc-item'>
                    <div className={`products__produc-item-box ${categorTitle ? 'pIAnimList' : ""}`}>
                      <div className="products__produc-img-box">
                        <ul className='products__produc-img-list' style={{
                          transform: `translateX(-${producItemSlider1 * 280 - 280}px)`
                        }}>
                          {item.productImg.map((img, inx) => (
                            <li className="products__produc-img-item" key={inx + 1}>
                              <img src={img} alt="produc" />
                            </li>
                          ))}
                        </ul>

                        <button className='products__produc-img-slider-btn-left'
                          onClick={() => producItemSlider1 > 1 ? setProducItemSlider1(producItemSlider1 - 1) : ""}>
                          <i className='bx bx-chevron-left' ></i>
                        </button>
                        <button className='products__produc-img-slider-btn-right'
                          onClick={() => producItemSlider1 < item.productImg.length ? setProducItemSlider1(producItemSlider1 + 1) : ""}>
                          <i className='bx bx-chevron-right' ></i>
                        </button>

                        <button className='products__produc-heart-icon'
                          onClick={() => saveFunc(item.id)}>
                          <i className={`bx ${item.saveActive ? 'bxs-heart' : 'bx-heart'}`}
                            style={{ color: `${item.saveActive ? '#f52424' : ""}` }}>
                          </i>
                        </button>

                        {item.discount > 0 ? <span className='products__produc-discount'>25%</span> : ""}

                        <ul className="products__produc-hover-icons-list">
                          <li className="products__produc-hover-icons-item">
                            <button className='products__produc-hover-icons-btn' onClick={() => addCart(i + 1)}>
                              <i className='bx bx-shopping-bag'></i>
                            </button>
                          </li>
                          <li className="products__produc-hover-icons-item">
                            <button className='products__produc-hover-icons-btn' onClick={() => (cartModalFunc(), cartModalItemsFunc(item.id))}>
                              <img src={eyeImg} alt="eye icon" />
                            </button>
                          </li>
                          <li className="products__produc-hover-icons-item">
                            <button className='products__produc-hover-icons-btn'>
                              <img src={refreshImg} alt="refresh icon" />
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="products__produc-desc">
                        <div>
                          <p className='products__produc-name'>{item.name}</p>
                          <p className='products__produc-price'>
                            {item.discount !== 0 ? <span>${item.discount}.00 </span> : ""}
                            ${item.weight.length > 1 ? item.price[weightAct - 1] : item.price[0]}.00
                          </p>
                        </div>

                        <ul className='products__produc-weight-list'>
                          {item.weight.map((weig, winx) => (
                            <li
                              className={`products__produc-weight-item ${winx + 1 === weightAct ? 'produc-weight-item-act' : ""}`}
                              key={winx + 1}
                              onClick={() => setWeightAct(winx + 1)}
                            >
                              <img src={weig} alt="weight" />
                            </li>
                          )).reverse()}
                        </ul>
                      </div>
                    </div>
                  </li> : ""
              ))}
            </ul>
          </div>
        </div >
      </section>
    </>
  )
}

export default Products
