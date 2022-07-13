import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderBtns from './HeaderBtns/HeaderBtns'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import './Header.scss'

import Logo from '../../assets/Images/logo.png'
import Menu from '../../assets/Images/res-menu.svg'
import Lan1Img from '../../assets/Images/header-top/lang.png'
import Lan2Img from '../../assets/Images/header-top/lan2.png'
import Lan3Img from '../../assets/Images/header-top/lan3.png'
import HeadMenuModal from './HeaderMenuModal/HeadMenuModal'
import useStore from '../../store/store'

function Header() {

  const [headerTopModal, setHeaderTopModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)
  const [headerMenuModal, setHeaderMenuModal] = useState(false)
  const shopModalFunc = useStore(state => state.shopModalFunc)

  const categorItems =
    ['Fruits', 'Vagitables', 'Drinks', 'Butter & Egges', 'Tress', 'Cakes', 'Meats', 'Fish', 'Onions', 'Grapes', 'Banana', 'Potatoes',]
  const categorHoverItems1 = ['Apples & Bananas', 'Berries', 'Grapes', 'Mangoes', 'Melons', 'Pears', 'Plums & Apricots', 'Seasonal']
  const categorHoverItems2 = ['Avocados & Peppers', 'Broccoli & Zucchini', 'Celery, Fennel & Leeks', 'Heirloom Tomatoes', 'Lettuce & Leafy', 'Mushrooms']
  const navItemsHoverItems =
    ['Vendors List', 'Vendor – Default', 'Vendor Store v1', 'Vendor Store v2', 'Vendor Store v3',
      'Vendor Store v4', 'Vendor Store v5', 'Vendor Store v6', 'Vendor Store v7']
  const resMenuITems = ['BROWSE CATEGORIES', 'HOME', 'SHOP', 'ELEMENTS', 'PAGES', 'VENDORS', 'LOGIN / REGISTER', 'ENGILSH', 'US DOLLAR']

  return (
    <>
      <header className='header'>
        <div className="header__top">
          <div className="container">
            <div className="header__top-inner">
              <p className='header__top-text'>
                <i className='bx bx-receipt bx-flip-horizontal' ></i>
                Add anything here or just remove it...
              </p>

              <div className="header__top-right">
                <div className="header__top-right-lang">
                  <p><img src={Lan1Img} alt="elessi nasatheme" /> English</p>

                  <ul className="header__top-right-lang-hov">
                    <li>
                      <img src={Lan2Img} alt="elessi nasatheme" />
                      <p>Deutsch</p>
                    </li>
                    <li>
                      <img src={Lan3Img} alt="elessi nasatheme" />
                      <p>Français</p>
                    </li>
                    <li>
                      <p>Requires WPML</p>
                    </li>
                  </ul>
                </div>

                <div className="header__top-right-us">
                  <p>US Dollar</p>

                  <ul className="header__top-right-us-hov">
                    <li>
                      <p>Euro (EUR)</p>
                    </li>
                    <li>
                      <p>Indian Rupee (INR)</p>
                    </li>
                    <li>
                      <p>Pound (GBP)</p>
                    </li>
                  </ul>
                </div>

                <button className='header__top-login-regis' onClick={() => setHeaderTopModal(!headerTopModal)}>
                  <i className='bx bx-user-circle'></i> Login / Register
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="header__logo-search-btns">
          <div className="container">
            <div className="header__logo-search-btn-inner">
              <div className="header__menu-search-btns">
                <button className='header__menu-btn' onClick={() => setHeaderMenuModal(!headerMenuModal)}>
                  <img src={Menu} alt="menu icon" />
                </button>

                <button className='header__search-btn' onClick={() => setSearchModal(!searchModal)}>
                  <i className='bx bx-search'></i>
                </button>
              </div>

              <div className="header__logo-box">
                <Link to='/'>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>

              <HeaderSearch searchModal={searchModal} setSearchModal={setSearchModal} />
              <HeaderBtns
                HeaderTopModal={headerTopModal}
                setHeaderTopModal={setHeaderTopModal}
              />
            </div>
          </div>
        </div>
        <HeaderNavBar
          categorItems={categorItems}
          categorHoverItems1={categorHoverItems1}
          categorHoverItems2={categorHoverItems2}
          navItemsHoverItems={navItemsHoverItems}
        />
      </header>

      {/* LOGIN REGISTER MODAL ========================== */}

      <div className={`header__top-login-regis-modal ${headerTopModal ? "headOpenModal" : ""}`}>
        <div
          className="header__top-login-regis-modal__bacdrop"
          onClick={() => setHeaderTopModal(!headerTopModal)}>
        </div>

        <div className={`header__top-login-regis-modal__inner ${headerTopModal ? "headOpenModalInner" : ""}`}>
          <div className="header__top-login-regis-modal__top">
            <Link to={'/'}>
              <img src={Logo} alt="logo" />
            </Link>
            <button className='header__top-login-regis-modal__remov-btn' onClick={() => setHeaderTopModal(!headerTopModal)}>
              <i className='bx bx-x'></i>
            </button>
          </div>
          <div className="header__top-login-regis-modal__content">
            <h4>Great to have you back!</h4>

            <form className='header__top-login-regis-modal__form'>
              <ul className='header__top-login-regis-modal__form-list'>
                <li>
                  <div>
                    <p>Username or email *</p>
                    <span>
                      <input type="checkbox" />
                      <p>Remember</p>
                    </span>
                  </div>
                  <input type="email" name="email" id="email" />
                </li>
                <li>
                  <div>
                    <p>Password *</p>
                    <p>Lost?</p>
                  </div>
                  <input type="text" name="password" id="password" />
                </li>
              </ul>

              <button className='header__top-login-regis-modal__form-btn' type='submit'>SIGN IN TO YOUR ACCOUNT</button>
            </form>

            <div className='header__top-login-regis-modal__orlogin'>
              <p className='header__top-login-regis-modal__orlogin-title'><span></span>Or login with<span></span></p>

              <button className='header__top-login-regis-modal__orlogin-btn1'>
                <i className='bx bxl-facebook-circle' ></i>Facebook
              </button>
              <button className='header__top-login-regis-modal__orlogin-btn2'>
                <i className='bx bxl-google' ></i>Google
              </button>
            </div>
          </div>
          <p className='header__top-login-regis-modal__text'>Not a member? <a href="#">Create an account</a></p>
        </div>
      </div>

      {/* HEADER MENU MODAL ========================== */}

      <HeadMenuModal
        Lan1Img={Lan1Img}
        Lan2Img={Lan2Img}
        Lan3Img={Lan3Img}
        categorItems={categorItems}
        resMenuITems={resMenuITems}
        headerMenuModal={headerMenuModal}
        setHeaderMenuModal={setHeaderMenuModal}
        headerTopModal={headerTopModal}
        setHeaderTopModal={setHeaderTopModal}
        categorHoverItems1={categorHoverItems1}
        categorHoverItems2={categorHoverItems2}
        navItemsHoverItems={navItemsHoverItems}
      />
    </>
  )
}

export default Header
