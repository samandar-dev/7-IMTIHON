import React from 'react'
import useStore from '../../store/store'
import './SaveModal.scss'

function SaveModal() {
  const saveArr = useStore(state => state.saveArr)
  const addCartItemCount = useStore(state => state.addCartFunc)
  const removeSaveCartFunc = useStore(state => state.removeSaveCartFunc)
  const saveModal = useStore(state => state.saveModal)
  const saveModalFunc = useStore(state => state.saveModalFunc)
  const shopModalFunc = useStore(state => state.shopModalFunc)

  const addCart = (id) => {
    addCartItemCount(id)
    shopModalFunc()
  }

  return (
    <>
      <section className={`savemodal ${saveModal ? "savemodalShow" : ""}`}>
        <div className={`savemodal__backdrop ${saveModal ? "savemodalBackdropShow" : ""}`}
          onClick={saveModalFunc}>
        </div>

        <div className={`savemodal__inner ${saveModal ? "savemodalInnerShow" : ""}`}>
          <button className="savemodal__remov-btn" onClick={saveModalFunc}>
            <i className='bx bx-chevron-right' ></i>
          </button>

          <h3 className='savemodal__title'>Wishlist</h3>

          <ul className="savemodal__list">
            {saveArr.map((item, inx) => (
              <li className="savemodal__item" key={inx + 1}>
                <div className="savemodal__item-img-box">
                  <img src={item.productImg[0]} alt={item.name} />
                </div>
                <div className="savemodal__item-desc">
                  <div className="savemodal__item-top">
                    <h4 className='savemodal__item-name'>{item.name}</h4>
                    <button className='savemodal__item-remove-btn' onClick={() => removeSaveCartFunc(item.id)}>
                      <i className='bx bx-x' ></i>
                    </button>
                  </div>

                  <div className="savemodal__item-main">
                    <p className='savemodal__produc-price'>
                      {item.discount !== 0 ? <span>${item.discount}.00</span> : ""} ${item.price[item.price.length - 1]}.00
                    </p>
                    <button className='savemodal__add-btn' onClick={() => addCart(item.id)}>ADD TO CART</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default SaveModal
