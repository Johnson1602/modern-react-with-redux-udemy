import React from 'react'
import Accordion from './Accordion'
import Search from './Search'

const ACCORDION_ITEMS = [
  {
    question: 'What is React?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam adipisci sunt illo, libero possimus vitae quaerat. Exercitationem earum quidem itaque consequuntur animi quod, illo voluptas minima corporis voluptate dolores.',
  },
  {
    question: 'Why do we want to use React?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam adipisci sunt illo, libero possimus vitae quaerat. Exercitationem earum quidem itaque consequuntur animi quod, illo voluptas minima corporis voluptate dolores.',
  },
  {
    question: "What's the best practice of using React?",
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam adipisci sunt illo, libero possimus vitae quaerat. Exercitationem earum quidem itaque consequuntur animi quod, illo voluptas minima corporis voluptate dolores.',
  },
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={ACCORDION_ITEMS} /> */}
      <Search />
    </div>
  )
}

export default App
