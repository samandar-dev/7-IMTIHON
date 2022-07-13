import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

import Logo from '../../assets/Images/logo.png'
import Visa from '../../assets/Images/footer-visa.png'

function Footer() {
  return (
    <>
      <section className='footer'>
        <div className="container">
          <div className="footer__inner">
            <div className="footer__menu">
              <div className="footer__logo-box">
                <Link to={'/'}>
                  <img src={Logo} alt="logo " />
                </Link>
              </div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <p className="footer__menu-item-tit">Calista Wise 7292 Dictum Av.</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__menu-item-tit">Antonio, Italy.</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__menu-item-tit">(+01)-800-3456-88</p>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">nasathemes@gmail.com</p>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">elessi.nasatheme.com</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu">
              <div className="footer__icon-box">
                <ul className="footer__icons-list">
                  <li className="footer__icons-item">
                    <Link to={'/'}>
                      <span><i className='bx bxl-twitter'></i></span>
                    </Link>
                  </li>
                  <li className="footer__icons-item">
                    <Link to={'/'}>
                      <span><i className='bx bxl-facebook'></i></span>
                    </Link>
                  </li>
                  <li className="footer__icons-item">
                    <Link to={'/'}>
                      <span><i className='bx bx-envelope' ></i></span>
                    </Link>
                  </li>
                  <li className="footer__icons-item">
                    <Link to={'/'}>
                      <span><i className='bx bxl-instagram' ></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">Delivery Information</p>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">Privacy Policy</p>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">Terms & Condition</p>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">Search Terms</p>
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to={'/'}>
                    <p className="footer__menu-item-tit">Order & Return</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu">
              <div className="footer__form-box">
                <h3 className='footer__title'>Newsletter</h3>
                <form className='footer__form'>
                  <input
                    type="email"
                    name='email'
                    placeholder='Enter your email here'
                  />
                  <button type='submit'>SUBSCRIBE</button>
                </form>
              </div>
              <div className="footer__menu-box">
                <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                    <p className="footer__menu-item-tit">Customer Service</p>
                  </li>
                  <li className="footer__menu-item">
                    <p className="footer__menu-item-tit">Privacy Policy</p>
                  </li>
                  <li className="footer__menu-item">
                    <p className="footer__menu-item-tit">Terms & Condition</p>
                  </li>
                  <li className="footer__menu-item">
                    <p className="footer__menu-item-tit">Best Seller</p>
                  </li>
                  <li className="footer__menu-item">
                    <p className="footer__menu-item-tit">Manufactures</p>
                  </li>
                </ul>

                <div>
                  <ul className="footer__menu-list">
                    <li className="footer__menu-itemm">
                      <p className="footer__menu-item-tit">Monday - Friday</p>
                      <p className='footer__menu-item-time'>08:00 - 20:00</p>
                    </li>
                    <li className="footer__menu-itemm">
                      <p className="footer__menu-item-tit">Saturday</p>
                      <p className='footer__menu-item-time'>09:00 - 21:00</p>
                    </li>
                    <li className="footer__menu-itemm">
                      <p className="footer__menu-item-tit">Sunday</p>
                      <p className='footer__menu-item-time'>13:00 - 22:00</p>
                    </li>
                  </ul>
                  <div className="footer__visa-paypal-img">
                    <img src={Visa} alt="visa Paypal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-inner">

              <p className='footer__bottom-left-tit'>© 2022 Nasatheme - All Right reserved!</p>

              <ul className="footer__bottom-right-list">
                <li className="footer__bottom-righ-item">
                  <Link to={'/'}>
                    <p className='footer__bottom-right-tit'>Privacy & Cookies</p>
                  </Link>
                </li>
                <li className="footer__bottom-righ-item">
                  <Link to={'/'}>
                    <p className='footer__bottom-right-tit'>Terms & Conditions</p>
                  </Link>
                </li>
                <li className="footer__bottom-righ-item">
                  <Link to={'/'}>
                    <p className='footer__bottom-right-tit'>Accessibility</p>
                  </Link>
                </li>
                <li className="footer__bottom-righ-item">
                  <Link to={'/'}>
                    <p className='footer__bottom-right-tit'>Store Directory</p>
                  </Link>
                </li>
                <li className="footer__bottom-righ-item">
                  <Link to={'/'}>
                    <p className='footer__bottom-right-tit'>About Us</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
