import React, { Fragment, useState } from 'react'

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null)

  const onQuestionClick = (index) => {
    setActiveItem(index)
  }

  const renderedList = items.map((item, index) => {
    const classname = index === activeItem ? 'active' : ''
    return (
      <Fragment key={item.question}>
        <div
          className={`title ${classname}`}
          onClick={() => onQuestionClick(index)}
        >
          <i className="dropdown icon" />
          <span className="accordion__question">{item.question}</span>
        </div>
        <div className={`content ${classname}`}>
          <p className="accordion__answer">{item.answer}</p>
        </div>
      </Fragment>
    )
  })

  return (
    <div className="ui styled accordion accordion__list">{renderedList}</div>
  )
}

export default Accordion
