import React from 'react'
import HeadMenuMItems from './HeaderMenuMItems/HeadMenuMItems'
import './HeadMenuModal.scss'

function HeadMenuModal(props) {
  return (
    <>
      <div className={`headMenu ${props.headerMenuModal ? 'headMenuModal' : ""}`}>
        <div className="headMenu__bacdrop" onClick={() => props.setHeaderMenuModal(!props.headerMenuModal)}></div>

        <div className={`headMenu__inner ${props.headerMenuModal ? 'headMenuInnerBox' : ""}`}>
          <button className='headMenu__remov-btn' onClick={() => props.setHeaderMenuModal(!props.headerMenuModal)}>
            <i className='bx bx-chevron-left' ></i>
          </button>
          <h3 className='headMenu__title'><i className='bx bx-menu' ></i> NAVIGATION</h3>

          <ul className="headMenu__list">
            <HeadMenuMItems
              Lan1Img={props.Lan1Img}
              Lan2Img={props.Lan2Img}
              Lan3Img={props.Lan3Img}
              categorItems={props.categorItems}
              resMenuITems={props.resMenuITems}
              headerMenuModal={props.headerMenuModal}
              setHeaderMenuModal={props.setHeaderMenuModal}
              headerTopModal={props.headerTopModal}
              setHeaderTopModal={props.setHeaderTopModal}
              categorHoverItems1={props.categorHoverItems1}
              categorHoverItems2={props.categorHoverItems2}
              navItemsHoverItems={props.navItemsHoverItems}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeadMenuModal
