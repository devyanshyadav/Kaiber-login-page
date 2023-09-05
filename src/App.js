import React from 'react'
import Cards from './components/Cards'
import cardDetail from './components/CardsDetail'
import "./App.css"
import { ImgCard } from './components/Cards'

const cards = cardDetail.map((elem) => (
  <>
    <Cards
      title={elem.cardTitle}
      event={elem.eventName}
      link={elem.pageLink}
      txtalign={elem.txtAlign}
    />
    <ImgCard image={elem.eventImage} />

  </>
))
const App = () => {
  return (
    <>
      {cards}

    </>
  )
}

export default App