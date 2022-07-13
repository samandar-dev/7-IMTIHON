import useStore from '../../store/store';
import './ShopModal.scss';

// IMGS ====================================

import Shipping from '../../assets/Images/shipping-icon.jpg'
import Coupon from '../../assets/Images/coupon.jpg'
import { useEffect, useState } from 'react';

function ShopModal() {

  const shopCarts = useStore(state => state.shopCart)
  const addCartItemCount = useStore(state => state.addCartFunc)
  const removCartItemCount = useStore(state => state.removeCartCountFunc)
  const removCart = useStore(state => state.removeCartFunc)
  const shopModall = useStore(state => state.shopModal)
  const shopModalFunc = useStore(state => state.shopModalFunc)

  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    let sub = 0;
    shopCarts.map(item => {
      sub += item.price[0] * item.productCount
    })
    setSubtotal(sub)
  }, [shopCarts]);

  return (
    <>
      <section className={`shopmodal ${shopModall ? "shopmodalShow" : ""}`}>
        <div className={`shopmodal__backdrop ${shopModall ? "shopmodalBackdropShow" : ""}`}
          onClick={shopModalFunc}>
        </div>

        <div className={`shopmodal__inner ${shopModall ? "shopmodalInnerShow" : ""}`}>
          <div className="shopmodal__cart">
            <button className="shopmodal__remov-btn"
              onClick={shopModalFunc}>
              <i className='bx bx-chevron-right' ></i>
            </button>

            <h3 className="shopmodal__title">My Cart</h3>

            <ul className="shopmodal__list">
              {shopCarts.map((item, inx) => (
                <li className="shopmodal__item" key={inx + 1}>
                  <div className="shopmodal__item-img-box">
                    <img src={item.productImg[0]} alt={item.name} />
                  </div>
                  <div className="shopmodal__item-desc">
                    <div className="shopmodal__item-top">
                      <h4 className='shopmodal__item-name'>{item.name}</h4>
                      <button className='shopmodal__item-remove-btn'
                        onClick={() => removCart(item.id)}>
                        <i className='bx bx-x' ></i>
                      </button>
                    </div>

                    <div className="shopmodal__item-main">
                      <div className="shopmodal__item-add-rem-box">
                        <div className="shopmodal__item-add-rem-tit">
                          <input type='number' name='number'
                            value={item.productCount >= 1 ? item.productCount : 1}
                          />
                        </div>
                        <div className="shopmodal__item-add-rem-btns">
                          <button className='shopmodal__item-add-btn' onClick={() => addCartItemCount(item.id)}>+</button>
                          <button className='shopmodal__item-rem-btn' onClick={() => removCartItemCount(item.id)}>-</button>
                        </div>
                      </div>
                      <span>
                        <i className='bx bx-x' ></i>
                      </span>
                      <p className='shopmodal__item-price'>${item.price[0]}.00</p>
                      <p className='shopmodal__item-subtotal'>${item.price[0] * item.productCount}.00</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="shopmodal__note-ship-cou-box">
            <ul className="shopmodal__note-ship-cou-list">
              <li className="shopmodal__note-ship-cou-item">
                <span>
                  <i className='bx bxs-edit'></i>
                </span>
                <p>Note</p>
              </li>
              <li className="shopmodal__note-ship-cou-item">
                <span>
                  <img src={Shipping} alt="shipping" />
                </span>
                <p>Shipping</p>
              </li>
              <li className="shopmodal__note-ship-cou-item">
                <span>
                  <img src={Coupon} alt="" />
                </span>
                <p>Coupon</p>
              </li>
            </ul>

            <div className="shopmodal__subtotal-box">
              <div>
                <p className="shopmodal__subtotal-tit">Subtotal</p>
                <p className='shopmodal__subtotal-price'>${subtotal}.00</p>
              </div>
              <div>
                <p className='shopmodal__ship-tit'>Shipping</p>
                <p className='shopmodal__ship-price'>Flat rate: $19.00</p>
              </div>
            </div>

            <div className="shopmodal__total">
              <div className="shopmodal__total-tit">
                <p>Total</p>
                <p>${subtotal + 19}.00</p>
              </div>
              <div className="shopmodal__total-anim">
                <span style={{
                  width: `${subtotal}%`
                }}>
                  <p>{subtotal >= 100 ? 100 : subtotal}%</p>
                </span>
              </div>
              <p className='shopmodal__free-ship-tit'>Spend <span>$150.00</span> more to reach <b>FREE SHIPPING!</b></p>
            </div>

            <button className='shopmodal__viewCart-btn'>VIEW CART</button>
            <button className='shopmodal__checkout-btn'>CHECKOUT</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopModal
