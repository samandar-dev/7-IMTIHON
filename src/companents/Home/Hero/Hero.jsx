import React, { useEffect, useState } from 'react'
import './Hero.scss'

function Hero() {

  const [sliderImg, setSliderImg] = useState([
    {
      id: 1,
      act: true
    },
    {
      id: 2,
      act: false
    },
    {
      id: 3,
      act: false
    },
  ])

  const [heroSliderCount, setHeroSliderCount] = useState(1)
  const [time, setTime] = useState(3000)

  // setTimeout(() => {
  //   setInterval(() => {
  //     setHeroSliderCount(heroSliderCount < 3 ? heroSliderCount + 1 : 1)
  //   }, 1000);
  // }, time);

  useEffect(() => {
    setSliderImg(
      sliderImg.map((itm, i) => {
        if (heroSliderCount == itm.id) {
          setHeroSliderCount(itm.id)
          return {
            ...itm,
            act: true,
          }
        }
        return {
          ...itm,
          act: false
        }
      }))
  }, [heroSliderCount]);

  return (
    <>
      <section className='hero'>
        <div className="hero__inner">
          <button className='hero__slider-left-btn'
            onClick={() => heroSliderCount > 1 ? setHeroSliderCount(heroSliderCount - 1) : ""}>
            <i className='bx bx-chevron-left' ></i>
          </button>

          <ul className="hero__list">
            <li className="hero__item" style={{
              opacity: `${heroSliderCount === 1 ? 1 : 0}`,
              zIndex: `${heroSliderCount === 1 ? 1 : -50}`,
              transition: 'all 1s ease'
            }}>
              <div className="hero__desc">
                <p className={`hero__tit ${heroSliderCount === 1 ? 'heroDescAnimTit' : ""}`}>Shop our freshest</p>
                <h2 className={`hero__title ${heroSliderCount === 1 ? 'heroDescAnimTitle' : ""}`}>Fresh Hand-Picked <br /> Vegetables <span>Everyday!</span> </h2>
                <div>
                  <button className={`hero__btn ${heroSliderCount === 1 ? 'heroDescAnimBtn' : ""}`}>SHOP NOW</button>
                </div>
              </div>
            </li>
            <li className="hero__item" style={{
              opacity: `${heroSliderCount === 2 ? 1 : 0}`,
              zIndex: `${heroSliderCount === 2 ? 1 : -50}`,
              transition: 'all 1s ease'
            }}>
              <div className="hero__desc">
                <p className={`hero__tit ${heroSliderCount === 2 ? 'heroDescAnimTit' : ""}`}>ELESSI STORE</p>
                <h2 className={`hero__title ${heroSliderCount === 2 ? 'heroDescAnimTitle' : ""}`}>Fresh vegetables <br /> Sale up to 30% Off</h2>
                <div>
                  <button className={`hero__btn ${heroSliderCount === 2 ? 'heroDescAnimBtn' : ""}`}>SHOP NOW</button>
                </div>
              </div>
            </li>
            <li className="hero__item" style={{
              opacity: `${heroSliderCount === 3 ? 1 : 0}`,
              zIndex: `${heroSliderCount === 3 ? 1 : -50}`,
              transition: 'all 1s ease'
            }}>
              <div className="hero__desc">
                <p className={`hero__tit ${heroSliderCount === 3 ? 'heroDescAnimTit' : ""}`}>Daily Promotions</p>
                <h2 className={`hero__title ${heroSliderCount === 3 ? 'heroDescAnimTitle' : ""}`}>Fresh Lemon <br /> discount up <span>40% off!</span> </h2>
                <div>
                  <button className={`hero__btn ${heroSliderCount === 3 ? 'heroDescAnimBtn' : ""}`}>SHOP NOW</button>
                </div>
              </div>
            </li>
          </ul>

          <ul className="hero__slider-btns-list">
            {sliderImg.map((itm, inx) => (
              <li className="hero__slider-btns-item" key={inx + 1}>
                <button
                  className={`hero__slider-btns-btn ${itm.act ? 'hero__slider-btns-btn-act' : ''}`}
                  id={itm.id} onClick={() => setHeroSliderCount(inx + 1)}>
                </button>
              </li>
            ))}
          </ul>

          <button className='hero__slider-right-btn'
            onClick={() => heroSliderCount < 3 ? setHeroSliderCount(heroSliderCount + 1) : ""}>
            <i className='bx bx-chevron-right' ></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
