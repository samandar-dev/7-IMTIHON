import React from 'react'
import './CartModal.scss'

import { Link } from 'react-router-dom';
import useStore from '../../store/store';

function CartModal() {
  const cartModal = useStore(state => state.cartModal)
  const cartCount = useStore(state => state.cartCount)
  const addCartFunc = useStore(state => state.addCartFunc)
  const cartAddCount = useStore(state => state.cartAddCount)
  const shopModalFunc = useStore(state => state.shopModalFunc)
  const cartModalItem = useStore(state => state.cartModalItem)
  const cartModalFunc = useStore(state => state.cartModalFunc)
  const cartRemovCount = useStore(state => state.cartRemovCount)

  return (
    <>
      <section className={`cartmodal ${cartModal ? "cartModalShow" : ""}`}>
        <div className={`cartmodal__backdrop ${cartModal ? "cartModalBackDrop" : ""}`}
          onClick={cartModalFunc}>
        </div>

        <div className={`cartmodal__inner ${cartModal ? "cartModalInner " : ""}`}>
          <button className="cartmodal__remov-btn" onClick={cartModalFunc}>
            <i class='bx bx-chevron-right'></i>
          </button>

          <div className="cartmodal__img-box">
            <img src={cartModalItem.productImg[0]} alt="" />
            <img src={cartModalItem.productImg[1] || cartModalItem.productImg[0]} alt="" />
          </div>

          <div className="cartmodal__desc">
            <h3 className="cartmodal__title">{cartModalItem.name}</h3>
            <p className='cartmodal__price'>
              {cartModalItem.discount > 0 ? <span>{cartModalItem.discount}.00</span> : ""}
              ${cartModalItem.price[cartModalItem.price.length - 1]}.00
            </p>

            <p className='cartmodal__text'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
          </div>

          {cartModalItem.saleDays > 0 ?
            <ul className='cartmodal__sale-list'>
              <li className="cartmodal__sale-item">
                <span>{cartModalItem.saleDays}</span>
                <p>DAYS</p>
              </li>
              <li className="cartmodal__sale-item">
                <span>{cartModalItem.saleHours}</span>
                <p>HOURSE</p>
              </li>
              <li className="cartmodal__sale-item">
                <span>{cartModalItem.saleMinut}</span>
                <p>MINS</p>
              </li>
              <li className="cartmodal__sale-item">
                <span>{cartModalItem.saleSecound}</span>
                <p>SECS</p>
              </li>
            </ul>
            : ""}

          {cartModalItem.residue > 0 ?
            <div className="cartmodal__anims">
              <p className='cartmodal__sold-tit'>Only <span>{cartModalItem.residue}</span> item(s) left in stock.</p>

              <div className="cartmodal__anim-box">
                <span className={` ${cartModal == true ? "cartAnim" : ""}`}></span>
              </div>
            </div>
            : ""}

          <div className="cartmodal__add-cart">
            <div className="cartmodal__add-cart-box">
              <input type="number" name='number' value={cartCount} />
              <div>
                <button onClick={() => cartAddCount()}>+</button>
                <button onClick={() => cartRemovCount()}>-</button>
              </div>
            </div>

            <button className='cartmodal__add-btn' onClick={() => (addCartFunc(cartModalItem.id), shopModalFunc())}>ADD TO CART</button>
            <button className='cartmodal__buy-now-btn'>BUY NOW</button>
          </div>

          <ul className="cartmodal__bottom-list">
            <li className="cartmodal__bottom-item">
              <p className='cartmodal__bottom-tit'><span>SKU:</span> OGN_DRWL7</p>
            </li>
            <li className="cartmodal__bottom-item">
              <p className='cartmodal__bottom-tit'><span>Categories:</span> Fresh Organic, Citrus Fruit</p>
            </li>
            <li className="cartmodal__bottom-item">
              <p className='cartmodal__bottom-tit'><span>Tags:</span> Fruits, Organics, Vegetables</p>
            </li>
          </ul>

          <div className='cartmodal__bottom-links-box'>
            <p className='cartmodal__bottom-share'><i class='bx bx-share-alt' ></i> Share</p>
            <ul className='cartmodal__bottom-links-list'>
              <li className="cartmodal__bottom-links-item">
                <Link to={'/'}>
                  <button>
                    <i class='bx bxl-twitter'></i>
                  </button>
                </Link>
              </li>
              <li className="cartmodal__bottom-links-item">
                <Link to={'/'}>
                  <button>
                    <i class='bx bxl-facebook'></i>
                  </button>
                </Link>
              </li>
              <li className="cartmodal__bottom-links-item">
                <Link to={'/'}>
                  <button>
                    <i class='bx bxl-telegram'></i>
                  </button>
                </Link>
              </li>
              <li className="cartmodal__bottom-links-item">
                <Link to={'/'}>
                  <button>
                    <i class='bx bxl-vk' ></i>
                  </button>
                </Link>
              </li>
              <li className="cartmodal__bottom-links-item">
                <Link to={'/'}>
                  <button>
                    <i class='bx bx-envelope' ></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartModal
