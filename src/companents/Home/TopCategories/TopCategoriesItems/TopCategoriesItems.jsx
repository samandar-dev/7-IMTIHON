import React from 'react'
import './TopCategoriesItems.scss'

function TopCategoriesItems({ categories }) {
  return (
    <>
      {categories.map((itm, inx) => (
        <li className="categories__item" key={inx + 1}>
          <div className="categories__img-box">
            <img src={itm.img} alt="categor" />
          </div>
          <p>{itm.name}</p>
        </li>
      ))}
    </>
  )
}

export default TopCategoriesItems
