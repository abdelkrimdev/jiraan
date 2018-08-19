import React from 'react'
import { shallow } from 'enzyme'

import InputField from './input-field.component'

describe('input field component', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<InputField />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<InputField placeholder='put somrthing here...' />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set the placeholder property.', () => {
    const placeholder = 'put somrthing here...'

    const wrapper = shallow(<InputField placeholder={placeholder} />)
    const placeholderFromProps = wrapper.prop('placeholder')

    expect(placeholderFromProps).toEqual(placeholder)
  })

  it('should set the onChangeText callback function.', () => {
    const onChangeText = jest.fn()

    const wrapper = shallow(<InputField onChangeText={onChangeText} />)
    wrapper.prop('onChangeText')()

    expect(onChangeText).toBeCalled()
  })

  it('should have a default value for the autoCapitalize property.', () => {
    const wrapper = shallow(<InputField />)
    const autoCapitalizeFromProps = wrapper.prop('autoCapitalize')

    expect(autoCapitalizeFromProps).toMatchSnapshot()
  })

  it('should set the autoCapitalize property.', () => {
    const autoCapitalize = 'words'

    const wrapper = shallow(<InputField autoCapitalize={autoCapitalize} />)
    const autoCapitalizeFromProps = wrapper.prop('autoCapitalize')

    expect(autoCapitalizeFromProps).toEqual(autoCapitalize)
  })

  it('should have a default value for the autoCorrect property.', () => {
    const wrapper = shallow(<InputField />)
    const autoCapitalizeFromProps = wrapper.prop('autoCorrect')

    expect(autoCapitalizeFromProps).toBeFalsy()
  })

  it('should set the autoCorrect property.', () => {
    const autoCorrect = true

    const wrapper = shallow(<InputField autoCorrect={autoCorrect} />)
    const autoCorrectFromProps = wrapper.prop('autoCorrect')

    expect(autoCorrectFromProps).toEqual(autoCorrect)
  })

  it('should have a default value for the style property.', () => {
    const wrapper = shallow(<InputField />)
    const autoCapitalizeFromProps = wrapper.prop('style')

    expect(autoCapitalizeFromProps).toMatchSnapshot()
  })

  it('should set the style property.', () => {
    const style = { }

    const wrapper = shallow(<InputField style={style} />)
    const styleFromProps = wrapper.prop('style')

    expect(styleFromProps).toEqual(style)
  })
})
