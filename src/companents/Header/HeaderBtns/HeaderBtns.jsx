import React from 'react'
import useStore from '../../../store/store'
import './HeaderBtns.scss'

import Cart from '../../../assets/Images/cart.svg'
import Heart from '../../../assets/Images/heart.svg'
import Replay from '../../../assets/Images/replay.svg'

function HeaderBtns({ headerTopModal, setHeaderTopModal }) {
  const shopModalFunc = useStore(state => state.shopModalFunc)
  const saveModalFunc = useStore(state => state.saveModalFunc)
  const shopCart = useStore(state => state.shopCart)
  const saveArr = useStore(state => state.saveArr)

  return (
    <>
      <div className="header__btns-box">
        <button className='header__btn-user' onClick={() => setHeaderTopModal(!headerTopModal)}>
          <i className='bx bx-user-circle'></i>
        </button>
        <button className='header__btn-shop' onClick={shopModalFunc}>
          <img src={Cart} alt="Cart" />
          {shopCart.length >= 1 ? <span>{shopCart.length}</span> : ""}
        </button>
        <button className='header__btn-heart' onClick={saveModalFunc}>
          <img src={Heart} alt="Cart" />
          {saveArr.length >= 1 ? <span>{saveArr.length}</span> : ""}
        </button>
        <button className='header__btn-compare'>
          <img src={Replay} alt="Cart" />
          {/* <span>1</span> */}
        </button>
      </div>
    </>
  )
}

export default HeaderBtns
