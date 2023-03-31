import React, { useState } from 'react'

const Dropdown = ({ options, selection, onSelectionChange }) => {
  const [open, setOpen] = useState(false)

  const renderedOptions = options.map((option) => {
    // dropdown 仅展示未选中的选项
    return option.value === selection.value ? null : (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectionChange(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selection.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
