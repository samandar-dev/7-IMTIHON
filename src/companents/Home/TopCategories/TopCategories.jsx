import React, { useState } from 'react'
import TopCategoriesItems from './TopCategoriesItems/TopCategoriesItems'
import './TopCategories.scss'

import categor1 from '../../../assets/Images/homeTopCategories/top-categories-1.jpg'
import categor2 from '../../../assets/Images/homeTopCategories/top-categories-2.jpg'
import categor3 from '../../../assets/Images/homeTopCategories/top-categories-3.jpg'
import categor4 from '../../../assets/Images/homeTopCategories/top-categories-4.jpg'
import categor5 from '../../../assets/Images/homeTopCategories/top-categories-5.jpg'
import categor6 from '../../../assets/Images/homeTopCategories/top-categories-6.jpg'
import categor7 from '../../../assets/Images/homeTopCategories/top-categories-7.jpg'
import categor8 from '../../../assets/Images/homeTopCategories/top-categories-8.jpg'
import categor9 from '../../../assets/Images/homeTopCategories/top-categories-9.jpg'
import categor10 from '../../../assets/Images/homeTopCategories/top-categories-10.jpg'

function TopCategories() {
  const [categorSliderCount, setCategorSliderCount] = useState(1)

  const categories = [
    {
      id: 1,
      name: 'Milks & Creams',
      img: categor1,
    },
    {
      id: 2,
      name: 'Fruits',
      img: categor2,
    },
    {
      id: 3,
      name: 'Vegetables',
      img: categor3,
    },
    {
      id: 4,
      name: 'Nut Gifts',
      img: categor4,
    },
    {
      id: 5,
      name: 'Nut & Seeds',
      img: categor5,
    },
    {
      id: 6,
      name: 'Fresh Tomatoes',
      img: categor6,
    },
    {
      id: 7,
      name: 'Fresh Organic',
      img: categor7,
    },
    {
      id: 8,
      name: 'Butter & Egges',
      img: categor8,
    },
    {
      id: 9,
      name: 'Fresh & Meates',
      img: categor9,
    },
    {
      id: 10,
      name: 'Tress',
      img: categor10,
    }
  ]

  const sliderListDownHandler = (e) => {
    console.log(e);
  }


  return (
    <>
      <section className='categories'>
        <div className="container">
          <div className="categories__inner">
            <h3 className='categories__title'>Top Categories</h3>

            <div className="categories__slider-box">
              <ul className="categories__list" id='categorList' onKeyDown={sliderListDownHandler} style={{
                transform: `translateX(-${categorSliderCount * 195 - 195}px)`,
                transition: 'all .8s ease'
              }}>
                <TopCategoriesItems categories={categories} />
              </ul>
            </div>

            <button className='categories__slider-left-btn'
              onClick={() => categorSliderCount > 1 ? setCategorSliderCount(categorSliderCount - 1) : 1}>
              <i className='bx bx-chevron-left' ></i>
            </button>
            <button className='categories__slider-right-btn'
              onClick={() => categorSliderCount < 5 ? setCategorSliderCount(categorSliderCount + 1) : 4}>
              <i className='bx bx-chevron-right' ></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopCategories
