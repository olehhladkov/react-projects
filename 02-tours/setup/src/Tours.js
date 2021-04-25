import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTourById }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTourById={removeTourById} />
          )
        })}
      </div>
    </section>
  )
}

export default Tours
