import React from 'react'

const Categories = ({ categories, changeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={category}
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
