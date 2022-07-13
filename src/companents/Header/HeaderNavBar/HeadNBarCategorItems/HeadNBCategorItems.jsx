import React from 'react'
import './HeadNBCategorItems.scss'

import ItemsHovImg from '../../../../assets/Images/head-categor-item-hov.jpg'
import icon1 from '../../../../assets/Images/products/orange.jpg'
import icon2 from '../../../../assets/Images/products/cailifower.png'
import icon3 from '../../../../assets/Images/products/milik-creem.png'
import icon4 from '../../../../assets/Images/products/banana.png'
import icon5 from '../../../../assets/Images/products/see-food.png'

function HeadNBCategorItems(props) {
  return (
    <>
      {props.categorItems.map((itm, inx) => (
        <li className='header__navBar-categor-item' key={inx + 1}>
          <p>
            {inx + 1 === 1 ? <img src={icon1} alt="" /> : ""}
            {inx + 1 === 2 ? <img src={icon2} alt="" /> : ""}
            {inx + 1 === 3 ? <img src={icon3} alt="" /> : ""}
            {inx + 1 === 4 ? <img src={icon4} alt="" /> : ""}
            {inx + 1 === 5 ? <img src={icon5} alt="" /> : ""}
            {inx + 1 === 6 ? <img src={icon1} alt="" /> : ""}
            {inx + 1 === 7 ? <img src={icon2} alt="" /> : ""}
            {inx + 1 === 8 ? <img src={icon3} alt="" /> : ""}
            {inx + 1 === 9 ? <img src={icon4} alt="" /> : ""}
            {inx + 1 === 10 ? <img src={icon5} alt="" /> : ""}
            {inx + 1 === 11 ? <img src={icon1} alt="" /> : ""}
            {inx + 1 === 12 ? <img src={icon2} alt="" /> : ""}
            {itm} {inx + 1 <= 3 ? <span><i className='bx bx-chevron-right' ></i></span> : ""}
          </p>

          {inx + 1 <= 3 ?
            <div className="header__navBar-categor-hov-box">
              <div>
                <h4>Fresh Fruit</h4>
                <ul className="header__navBar-categor-hov-list">
                  {props.categorHoverItems1.map((items1, i1) => (
                    <li className='header__navBar-categor-hov-item' key={i1 + 1}>
                      <p className='header__navBar-categor-hov-item-tit'>{items1}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Nut Gifts</h4>
                <ul className="header__navBar-categor-hov-list">
                  {props.categorHoverItems2.map((items2, i2) => (
                    <li className='header__navBar-categor-hov-item' key={i2 + 1}>
                      <p className='header__navBar-categor-hov-item-tit'>{items2}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header__navBar-categor-hov-img-box">
                <img src={ItemsHovImg} alt="elessi nasatheme" />
              </div>
            </div>
            : ""}
        </li>
      ))}
    </>
  )
}

export default HeadNBCategorItems
