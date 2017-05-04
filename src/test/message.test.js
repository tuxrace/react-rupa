import { describe, it } from 'mocha'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Message from '../Components/message'

console.log(shallow(Message).length)
describe('Message Component',() => {
  it('renders',() => {
    const wrapper = shallow(<Message />)
    expect(wrapper.find('Listitem')).toEqual(1)
  })
})
