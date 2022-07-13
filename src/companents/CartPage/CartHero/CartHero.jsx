import React from 'react'
import { Link } from 'react-router-dom'
import './CartHero.scss'

function CartHero() {

  const cartHeroItems = ['Home', 'Organics', 'Vegetables', 'Daily Vegetables', 'Gourd & Cucumber']

  return (
    <>
      <section className='carthero'>
        <div className="container">
          <div className="carthero__inner">
            <h2 className="carthero__title">Organic Almaverde</h2>
            <ul className="carthero__list">
              {cartHeroItems.map((item, inx) => (
                <li className="carthero__item" key={inx + 1}>
                  <Link to={'/'}>
                    <p>{item} {inx + 1 < 5 ? <i class='bx bx-chevron-right' ></i> : ""}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartHero
