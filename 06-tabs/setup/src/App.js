import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [jobIndex, setJobIndex] = useState(0)

  const fetchJobs = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)

      if (response.status >= 200 && response.status <= 299) {
        const jobs = await response.json()

        setJobs(jobs)
        setLoading(false)

        return
      }

      throw new Error(response.statusText)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { title, company, dates, duties } = jobs[jobIndex]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ company }, index) => (
            <button
              type="button"
              className={`job-btn ${index === jobIndex ? 'active-btn' : ''}`}
              key={company}
              onClick={() => setJobIndex(index)}
            >
              {company}
            </button>
          ))}
        </div>

        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((duty, index) => (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default App
