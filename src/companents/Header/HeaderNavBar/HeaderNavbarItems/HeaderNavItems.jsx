import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderNavItems.scss'

function HeaderNavItems(props) {
  return (
    <>
      {props.navItems.map((itm, inx) => (
        <li className='header__nav-item' key={inx + 1}>
          <NavLink to={"/" + itm.toLowerCase()} className={({ isActive }) => (isActive ? "header__nav-item-act" : "")}>
            <p className='header__nav-item-tit'>{itm} <i className='bx bx-chevron-down'></i></p>
          </NavLink>

          <div className="header__nav-item-hov">
            <ul className='header__nav-item-hov-list'>
              {props.navItemsHoverItems.map((hitem, i) => (
                <li className='header__nav-item-hov-item' key={i + 1}>
                  <p>{hitem}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </>
  )
}

export default HeaderNavItems
