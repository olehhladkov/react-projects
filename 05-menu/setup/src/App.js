import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)

  const CATEGORY_ALL = 'all'
  const categories = [
    CATEGORY_ALL,
    ...new Set(items.map(({ category }) => category)),
  ]

  const changeCategory = (category) => {
    if (category === CATEGORY_ALL) {
      return setMenuItems(items)
    }

    const newMenuItems = items.filter(
      (menuItem) => menuItem.category === category
    )

    setMenuItems(newMenuItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} changeCategory={changeCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
