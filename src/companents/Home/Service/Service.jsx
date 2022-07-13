import React from 'react'
import './Service.scss'

function Service() {
  return (
    <>
      <section className='service'>
        <div className="container">
          <ul className="service__list">
            <li className="service__item">
              <span className="service__icon">
                <i className='bx bxs-plane-alt' ></i>
              </span>
              <h4 className="service__item-title">Free Shipping</h4>
              <p className='service__item-text'>Free Shipping for all US order</p>
            </li>
            <li className="service__item">
              <span className="service__icon">
                <i className='bx bx-headphone' ></i>
              </span>
              <h4 className="service__item-title">Support 24/7</h4>
              <p className='service__item-text'>We support 24h a day</p>
            </li>
            <li className="service__item">
              <span className="service__icon">
                <i className='bx bx-revision'></i>
              </span>
              <h4 className="service__item-title">100% Money Back</h4>
              <p className='service__item-text'>You have 30 days to Return</p>
            </li>
            <li className="service__item">
              <span className="service__icon">
                <i className='bx bx-gift'></i>
              </span>
              <h4 className="service__item-title">Payment Secure</h4>
              <p className='service__item-text'>We ensure secure payment</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Service
