import React from 'react'
import HeaderNavItems from './HeaderNavbarItems/HeaderNavItems'
import './HeaderNavBar.scss'

import HeadNBCategorItems from './HeadNBarCategorItems/HeadNBCategorItems'

function HeaderNavBar({ categorItems, categorHoverItems1, categorHoverItems2, navItemsHoverItems }) {

  const navItems = ['HOME', 'SHOP', 'ELEMENTS', 'PAGES', 'VANDORS']

  return (
    <>
      <div className="header__navBar">
        <div className="container">
          <div className="header__navBar-inner">
            <div className="header__navBar-categor">
              <button className='header__navBar-categor-btn'>
                <i className='bx bx-list-ul'></i> BROWSE CATEGORIES
              </button>

              <div className="header__navBar-categor-box">
                <ul className='header__navBar-categor-list'>
                  <HeadNBCategorItems
                    categorItems={categorItems}
                    categorHoverItems1={categorHoverItems1}
                    categorHoverItems2={categorHoverItems2}
                  />
                </ul>
              </div>
            </div>

            <nav className="header__nav">
              <ul className='header__nav-list'>
                <HeaderNavItems
                  navItems={navItems}
                  navItemsHoverItems={navItemsHoverItems}
                />
              </ul>
            </nav>

            <div className="header__navBar-tel">
              <i className='bx bx-headphone' ></i>
              <a href="tel:+018003456-88">(+01)-800-34-56-88</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNavBar
