import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [personIndex, setPersonIndex] = useState(0)

  const { image, name, job, text } = people[personIndex]
  const maxPersonIndex = people.length - 1

  const getValidPersonIndex = (index) => {
    if (index > maxPersonIndex) {
      return 0
    }

    if (index < 0) {
      return maxPersonIndex
    }

    return index
  }

  const nextPerson = () => {
    setPersonIndex((index) => {
      return getValidPersonIndex(index + 1)
    })
  }

  const prevPerson = () => {
    setPersonIndex((index) => {
      return getValidPersonIndex(index - 1)
    })
  }

  const randomPerson = () => {
    let randomIndex = Math.round(Math.random() * maxPersonIndex)

    if (randomIndex === personIndex) {
      randomIndex = randomIndex + 1
    }

    setPersonIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button type="button" className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
