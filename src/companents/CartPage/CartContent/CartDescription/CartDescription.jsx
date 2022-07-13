import React from 'react'
import './CartDescription.scss'

import descImg from '../../../../assets/Images/cartPage/cart-description-img.jpg';

function CartDescription() {
  return (
    <>
      <div className="cart-description">
        <ul className="cart-description__top-list">
          <li className="cart-description__top-item">
            <p className="cart-description__top-tit">Description</p>
          </li>
          <li className="cart-description__top-item">
            <p className="cart-description__top-tit">Reviews (1)</p>
          </li>
          <li className="cart-description__top-item">
            <p className="cart-description__top-tit">Custom Tab</p>
          </li>
        </ul>

        <div className="cart-description__main">
          <p className='cart-description__main-text'>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and demoralized by
            the charms of pleasure of the moment, so blinded by desire.
          </p>
          <p className='cart-description__main-text'>
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

          <div className="cart-description__imgs">
            <img src={descImg} alt="cart desc img" />
          </div>
        </div>

        <ul className="cart-description__bottom-list">
          <li className="cart-description__bottom-item">
            <p className='cart-description__bottom-tit'><span>SKU:</span> OGN_EW9G9-03</p>
          </li>
          <li className="cart-description__bottom-item">
            <p className='cart-description__bottom-tit'>/ <span>Categories:</span> Fresh Tomatoes, Nut Gifts, Root Vegetables</p>
          </li>
          <li className="cart-description__bottom-item">
            <p className='cart-description__bottom-tit'>/ <span>Tags:</span> Fruits, Organics, Vegetables</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CartDescription
