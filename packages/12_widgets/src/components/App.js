import React, { useState } from 'react'
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
    label: 'The color of red',
    value: 'red',
  },
  {
    label: 'The color of green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
]

const App = () => {
  const [selection, setSelection] = useState(dropdownOptions[0])

  return (
    <div>
      {/* <Accordion items={ACCORDION_ITEMS} /> */}
      {/* <Search /> */}
      <Dropdown
        options={dropdownOptions}
        selection={selection}
        onSelectionChange={setSelection}
      />
    </div>
  )
}

export default App
