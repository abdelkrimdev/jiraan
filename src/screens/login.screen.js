import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import InputField from '../components/input-field.component'
import { themeConstants } from '../constants/theme.constants'

export class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  state = {
    email: '',
    password: ''
  }

  handleSignIn = () => {
    const { email, password } = this.state
    console.log(`Credentials: email -> ${email} password -> ${password}`)
  }

  render () {
    return (
      <View style={styles.container}>
        <InputField
          keyboardType='email-address'
          placeholder='my-email@somewhere.com'
          onChangeText={(email) => this.setState({email})}
        />
        <InputField
          secureTextEntry
          placeholder='my-secret-password'
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          title='Sign In'
          onPress={this.handleSignIn}
          color={themeConstants.PRIMARY_COLOR}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 20,
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
