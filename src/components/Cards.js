import React from 'react'

const Cards = (props) => {
  return (
    <div className='archCards'>
      <span>
        <h2>{props.title}</h2>
        <h3 style={{ textAlign: props.txtalign }}>{props.event}</h3>
        <a href={props.link}>Explore</a>
      </span>
    </div>
  )
}

const ImgCard = (props) => {
  return (
    <div className='archCardsImg' style={{ backgroundImage: `url(${props.image})` }}>
    </div>

  )
}
export default Cards
export { ImgCard }