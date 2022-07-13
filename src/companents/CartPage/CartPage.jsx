import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CartContent from './CartContent/CartContent'
import CartHero from './CartHero/CartHero'

function CartPage() {
  return (
    <>
      <Header />
      <CartHero />
      <CartContent />
      <Footer />
    </>
  )
}

export default CartPage
