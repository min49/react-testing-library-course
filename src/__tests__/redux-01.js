import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render, fireEvent} from '@testing-library/react'
import {reducer, Counter} from '../redux-app'

test('can render with redux with defaults', () => {
  const store = createStore(reducer)
  const {getByTestId, getByText} = render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('1')
})
