import React, { useState } from 'react'
import './HeadMenuMItems.scss'

function HeadMenuMItems(props) {
  const [headMenuItemOne, setHeadMenuItemOne] = useState(false)
  const [headMenuItemTwo, setHeadMenuItemTwo] = useState(false)
  const [headMenuItemThree, setHeadMenuItemThree] = useState(false)
  const [headMenuItemFour, setHeadMenuItemFour] = useState(false)
  const [headMenuItemFive, setHeadMenuItemFive] = useState(false)
  const [headMenuItemSix, setHeadMenuItemSix] = useState(false)
  const [headMenuItemSeven, setHeadMenuItemSeven] = useState(false)
  const [headMenuItemEight, setHeadMenuItemEight] = useState(false)

  const [headMItemChildrenItemsOne, setHeadMItemChildrenItemsOne] = useState(false)
  const [headMItemChildrenItemsTwo, setHeadMItemChildrenItemsTwo] = useState(false)
  const [headMItemChildrenItemsThree, setHeadMItemChildrenItemsThree] = useState(false)

  const [headMItemTwoChilItemOne1, setHeadMItemTwoChilItemOne1] = useState(false)
  const [headMItemTwoChilItemOne2, setHeadMItemTwoChilItemOne2] = useState(false)

  const [headMItemTwoChilItemTwo1, setHeadMItemTwoChilItemTwo1] = useState(false)
  const [headMItemTwoChilItemTwo2, setHeadMItemTwoChilItemTwo2] = useState(false)

  const [headMItemTwoChilItemThree1, setHeadMItemTwoChilItemThree1] = useState(false)
  const [headMItemTwoChilItemThree2, setHeadMItemTwoChilItemThree2] = useState(false)

  const headMenuItemsChlichHendler = (inx) => {
    if (inx === 1) {
      setHeadMenuItemOne(!headMenuItemOne)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 2) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(!headMenuItemTwo)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 3) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(!headMenuItemThree)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 4) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(!headMenuItemFour)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 5) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(!headMenuItemFive)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 6) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(!headMenuItemSix)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(false)
    }
    if (inx === 8) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(!headMenuItemSeven)
      setHeadMenuItemEight(false)
    }
    if (inx === 9) {
      setHeadMenuItemOne(false)
      setHeadMenuItemTwo(false)
      setHeadMenuItemThree(false)
      setHeadMenuItemFour(false)
      setHeadMenuItemFive(false)
      setHeadMenuItemSix(false)
      setHeadMenuItemSeven(false)
      setHeadMenuItemEight(!headMenuItemEight)
    }
  }

  const HMenuItemsOneItemsHandler = (inx) => {
    if (inx === 1) {
      setHeadMItemChildrenItemsOne(!headMItemChildrenItemsOne)
      setHeadMItemChildrenItemsTwo(false)
      setHeadMItemChildrenItemsThree(false)
    }
    if (inx === 2) {
      setHeadMItemChildrenItemsOne(false)
      setHeadMItemChildrenItemsTwo(!headMItemChildrenItemsTwo)
      setHeadMItemChildrenItemsThree(false)
    }
    if (inx === 3) {
      setHeadMItemChildrenItemsOne(false)
      setHeadMItemChildrenItemsTwo(false)
      setHeadMItemChildrenItemsThree(!headMItemChildrenItemsThree)
    }
  }

  return (
    <>
      {
        props.resMenuITems.map((elem, i) => (
          <li
            className={`headMenu__item ${headMenuItemOne ? 'headMenuItemsAct' : ""}`}
            key={i + 1}
            onClick={() => i + 1 === 7 ?
              (props.setHeaderTopModal(!props.headerTopModal),
                props.setHeaderMenuModal(!props.headerMenuModal))
              : ""}
          >

            <div className='headMenu__item-box'>
              <p>
                {i + 1 === 7 ? <i className='bx bx-user-circle'></i> : ""}
                {i + 1 === 8 ? <img src={props.Lan1Img} alt="elessi nasatheme" /> : ""}
                {elem}
              </p>

              {i + 1 === 1 ?
                !headMenuItemOne ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 2 ?
                !headMenuItemTwo ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 3 ?
                !headMenuItemThree ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}
              {i + 1 === 4 ?
                !headMenuItemFour ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 5 ?
                !headMenuItemFive ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 6 ?
                !headMenuItemSix ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 8 ?
                !headMenuItemSeven ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}

              {i + 1 === 9 ?
                !headMenuItemEight ?
                  <i className='bx bx-plus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                  : <i className='bx bx-minus' onClick={() => headMenuItemsChlichHendler(i + 1)}></i>
                : ""}
            </div>

            {/* HEADER MENU MODAL ITEM ONE PART ===================================== */}

            {i + 1 == 1 ?
              <ul
                className={`headMenu__categor-item-list 
                  ${headMenuItemOne ? `hMLAct1
                    ${headMItemChildrenItemsOne ? `hMLAct2
                    ${headMItemTwoChilItemOne1 ? 'hMLAct3' : ""}
                    ${headMItemTwoChilItemOne2 ? 'hMLAct4' : ""}
                    ` : ""}
                    ${headMItemChildrenItemsTwo ? `hMLAct2
                    ${headMItemTwoChilItemOne1 ? 'hMLAct3' : ""}
                    ${headMItemTwoChilItemOne2 ? 'hMLAct4' : ""}
                    ` : ""}
                    ${headMItemChildrenItemsThree ? `hMLAct2
                    ${headMItemTwoChilItemOne1 ? 'hMLAct3' : ""}
                    ${headMItemTwoChilItemOne2 ? 'hMLAct4' : ""}
                    ` : ""}
                  ` : ""}
                `}>

                {props.categorItems.map((itm, inx) => (

                  <li className='headMenu__categor-item-item' key={inx + 1}>
                    <div className="headMenu__categor-item-box">
                      <p><i className='bx bxs-cheese'></i> {itm}</p>

                      {inx + 1 == 1 ?
                        !headMItemChildrenItemsOne ?
                          <i className='bx bx-plus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>

                          : <i className='bx bx-minus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>
                        : ""}

                      {inx + 1 == 2 ?
                        !headMItemChildrenItemsTwo ?
                          <i className='bx bx-plus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>

                          : <i className='bx bx-minus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>
                        : ""}

                      {inx + 1 == 3 ?
                        !headMItemChildrenItemsThree ?
                          <i className='bx bx-plus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>

                          : <i className='bx bx-minus' onClick={() => HMenuItemsOneItemsHandler(inx + 1)}></i>
                        : ""}
                    </div>

                    {/* HEADER MENU MODAL ITEM ONE ITEMS PART ===================================== */}

                    {inx + 1 == 1 ?
                      <ul
                        className={`headMenu__categor-twoItem-list 
                          ${headMItemChildrenItemsOne ? `hMLCHAct
                            ${headMItemTwoChilItemOne1 ? 'hMICh1' : ""}
                            ${headMItemTwoChilItemOne2 ? 'hMICh2' : ""}
                          ` : ""}
                        `}>

                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Fresh Fruit</p>
                            {!headMItemTwoChilItemOne1 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1), setHeadMItemTwoChilItemOne2(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne1 ? 'hMIChII1' : ""}`}>
                            {props.categorHoverItems1.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Nut Gifts</p>

                            {!headMItemTwoChilItemOne2 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2), setHeadMItemTwoChilItemOne1(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne2 ? 'hMIChII2' : ""}`}>
                            {props.categorHoverItems2.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                      : ""}

                    {/* HEADER MENU MODAL ITEM TWO ITEMS PART ===================================== */}

                    {inx + 1 == 2 ?
                      <ul
                        className={`headMenu__categor-twoItem-list 
                          ${headMItemChildrenItemsTwo ? `hMLCHAct
                            ${headMItemTwoChilItemOne1 ? 'hMICh1' : ""}
                            ${headMItemTwoChilItemOne2 ? 'hMICh2' : ""}
                          ` : ""}
                        `}>

                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Fresh Fruit</p>
                            {!headMItemTwoChilItemOne1 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1), setHeadMItemTwoChilItemOne2(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne1 ? 'hMIChII1' : ""}`}>
                            {props.categorHoverItems1.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Nut Gifts</p>

                            {!headMItemTwoChilItemOne2 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2), setHeadMItemTwoChilItemOne1(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne2 ? 'hMIChII2' : ""}`}>
                            {props.categorHoverItems2.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                      : ""}

                    {/* HEADER MENU MODAL ITEM THREE ITEMS PART ===================================== */}

                    {inx + 1 == 3 ?
                      <ul
                        className={`headMenu__categor-twoItem-list 
                          ${headMItemChildrenItemsThree ? `hMLCHAct
                            ${headMItemTwoChilItemOne1 ? 'hMICh1' : ""}
                            ${headMItemTwoChilItemOne2 ? 'hMICh2' : ""}
                          ` : ""}
                        `}>

                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Fresh Fruit</p>
                            {!headMItemTwoChilItemOne1 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1), setHeadMItemTwoChilItemOne2(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne1(!headMItemTwoChilItemOne1)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne1 ? 'hMIChII1' : ""}`}>
                            {props.categorHoverItems1.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className='headMenu__categor-twoItem-item'>
                          <div className="headMenu__categor-twoItem-box">
                            <p>Nut Gifts</p>

                            {!headMItemTwoChilItemOne2 ?
                              <i className='bx bx-plus'
                                onClick={() => (setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2), setHeadMItemTwoChilItemOne1(false))}
                              ></i>

                              : <i className='bx bx-minus' onClick={() => setHeadMItemTwoChilItemOne2(!headMItemTwoChilItemOne2)}></i>
                            }
                          </div>

                          <ul className={`headMenu__categor-twoItem-list ${headMItemTwoChilItemOne2 ? 'hMIChII2' : ""}`}>
                            {props.categorHoverItems2.map((threeItm, threeInx) => (
                              <li className="headMenu__categor-twoItem-item" key={threeInx + 1}>
                                <div className="headMenu__categor-twoItem-box">
                                  <p>{threeItm}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                      : ""}

                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM TWO PART ===================================== */}

            {i + 1 === 2 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemTwo ? 'hMLCHAct1' : ""}`}>
                {props.navItemsHoverItems.map((itm, inx) => (
                  <li className='headMenu__categor-twoItem-item' key={inx + 1}>
                    <div className="headMenu__categor-twoItem-box">
                      <p>{itm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM THREE PART ===================================== */}

            {i + 1 === 3 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemThree ? 'hMLCHAct1' : ""}`}>
                {props.navItemsHoverItems.map((itm, inx) => (
                  <li className='headMenu__categor-twoItem-item' key={inx + 1}>
                    <div className="headMenu__categor-twoItem-box">
                      <p>{itm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM FOUR PART ===================================== */}

            {i + 1 === 4 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemFour ? 'hMLCHAct1' : ""}`}>
                {props.navItemsHoverItems.map((itm, inx) => (
                  <li className='headMenu__categor-twoItem-item' key={inx + 1}>
                    <div className="headMenu__categor-twoItem-box">
                      <p>{itm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM FIVE PART ===================================== */}

            {i + 1 === 5 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemFive ? 'hMLCHAct1' : ""}`}>
                {props.navItemsHoverItems.map((itm, inx) => (
                  <li className='headMenu__categor-twoItem-item' key={inx + 1}>
                    <div className="headMenu__categor-twoItem-box">
                      <p>{itm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM SIX PART ===================================== */}

            {i + 1 === 6 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemSix ? 'hMLCHAct1' : ""}`}>
                {props.navItemsHoverItems.map((itm, inx) => (
                  <li className='headMenu__categor-twoItem-item' key={inx + 1}>
                    <div className="headMenu__categor-twoItem-box">
                      <p>{itm}</p>
                    </div>
                  </li>
                ))}
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM EIGHT PART ===================================== */}

            {i + 1 === 8 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemSeven ? 'hMICh3' : ""}`}>
                <li className='headMenu__categor-twoItem-item'>
                  <p><img src={props.Lan2Img} alt="elessi nasatheme" /> Deutsch</p>
                </li>
                <li className='headMenu__categor-twoItem-item'>
                  <p><img src={props.Lan3Img} alt="elessi nasatheme" /> Français</p>
                </li>
                <li className='headMenu__categor-twoItem-item'>
                  <p>Requires WPML</p>
                </li>
              </ul>
              : ""}

            {/* HEADER MENU MODAL ITEM NINE PART ===================================== */}

            {i + 1 === 9 ?
              <ul className={`headMenu__categor-twoItem-list ${headMenuItemEight ? 'hMICh3' : ""}`}>
                <li className='headMenu__categor-twoItem-item'>
                  <p>Euro (EUR)</p>
                </li>
                <li className='headMenu__categor-twoItem-item'>
                  <p>Indian Rupee (INR)</p>
                </li>
                <li className='headMenu__categor-twoItem-item'>
                  <p>Pound (GBP)</p>
                </li>
              </ul>
              : ""}
          </li>
        ))
      }
    </>
  )
}

export default HeadMenuMItems
