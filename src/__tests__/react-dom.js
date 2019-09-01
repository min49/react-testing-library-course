// 🐨 you're going to need to use React to create react elements, so import react
// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
// 🐨 Here's your component:
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  // 🐨 assert the input type attribute is a number
  //:🐨 assert the label's text content is "Favorite Number"
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  expect(div.querySelector('input').type).toBe('number')
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-dom&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
