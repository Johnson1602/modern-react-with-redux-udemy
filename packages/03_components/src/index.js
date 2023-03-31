import React from 'react'
import ReactDOM from 'react-dom'
import faker from '@faker-js/faker'

import CommentDetail from './CommentDetail'
import ApprovalCart from './ApprovalCard'

import './index.css'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCart>
        <CommentDetail author="Sam" timeAgo="Today at 4:00PM" comment="Nice blog post!" avatarSrc={faker.image.avatar()} />
      </ApprovalCart>

      <ApprovalCart>
        <CommentDetail author="Alex" timeAgo="Today at 11:30AM" comment="Great job!" avatarSrc={faker.image.avatar()} />
      </ApprovalCart>

      <ApprovalCart>
        <CommentDetail author="Jane" timeAgo="Yesterday at 7:15PM" comment="Keep it going!" avatarSrc={faker.image.avatar()} />
      </ApprovalCart>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)