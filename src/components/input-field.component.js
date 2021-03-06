import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const InputField = ({placeholder, onChangeText, autoCapitalize, autoCorrect, style, ...props}) => (
  <TextInput {...props}
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize={autoCapitalize === undefined ? 'none' : autoCapitalize}
    autoCorrect={autoCorrect === undefined ? false : autoCorrect}
    style={style === undefined ? styles.inputField : style}
  />
)

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    paddingBottom: 24,
    fontSize: 18
  }
})

export default InputField
