import React from 'react'
import Deal from './Deal/Deal'
import Hero from './Hero/Hero'
import Statc from './Statc/Statc'
import Logos from './Logos/Logos'
import Banner from './Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Service from './Service/Service'
import Products from './Products/Products'
import TopCategories from './TopCategories/TopCategories'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <TopCategories />
      <Deal />
      <Products />
      <Banner />
      <Statc />
      <Logos />
      <Footer />
    </>
  )
}

export default Home
