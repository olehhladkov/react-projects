import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [slideIndex, setSlideIndex] = useState(0)

  const maxIndex = people.length - 1

  useEffect(() => {
    if (slideIndex > maxIndex) {
      setSlideIndex(0)
    }

    if (slideIndex < 0) {
      setSlideIndex(maxIndex)
    }
  }, [slideIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex + 1)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [slideIndex])

  const getSlideClassName = (index) => {
    if (index === slideIndex) {
      return 'activeSlide'
    }

    if (slideIndex - 1 === index || (slideIndex === 0 && index === maxIndex)) {
      return 'lastSlide'
    }

    return 'nextSlide'
  }

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map(({ id, image, name, title, quote }, index) => (
          <article className={getSlideClassName(index)} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}

        <button
          type="button"
          className="prev"
          onClick={() => setSlideIndex(slideIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setSlideIndex(slideIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
