import React from 'react'
import quotes from '../projectData/quotes'

export const Quote = () => {
  const quote = quotes[Math.floor(Math.random() * (21 - 1)) + 1] 

  return (
    <div className="center" style={{fontFamily: "cursive", fontStyle: "italic", fontWeight: "bold", fontSize: "2ch"}}>"{quote}"</div>
  )
}
