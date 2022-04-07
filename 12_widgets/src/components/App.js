import React from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'

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

const dropdownOptions = [
  {
    lable: 'The color of Red',
    value: 'red',
  },
  {
    lable: 'The color of green',
    value: 'green',
  },
  {
    lable: 'A shade of blue',
    value: 'blue',
  },
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={ACCORDION_ITEMS} /> */}
      {/* <Search /> */}
      <Dropdown options={dropdownOptions} />
    </div>
  )
}

export default App
