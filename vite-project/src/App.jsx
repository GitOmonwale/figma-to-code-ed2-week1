import { useState } from 'react'
import { CreateAndSell, CTA, Footer, Hero, Navbar, OurCollections } from './components'
function App() {

  return (
    <>
      <div className='font-raleway overflow-hidden w-full box-border'>
        <div className='max-w-screen-2xl lg:px-20 md:px-14 sm:10 px-5 m-auto'>
          <Navbar></Navbar>
          <Hero></Hero>
          <OurCollections></OurCollections>
          <CreateAndSell></CreateAndSell>
          <CTA></CTA>
          <Footer></Footer>
        </div>

      </div>

    </>
  )
}

export default App
