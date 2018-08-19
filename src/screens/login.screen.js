import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { authenticationActions } from '../actions/authentication.actions'
import InputField from '../components/input-field.component'
import { navigationConstants } from '../constants/navigation.constants'
import { themeConstants } from '../constants/theme.constants'

export class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  state = {
    email: '',
    password: ''
  }

  componentWillUpdate (nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate(navigationConstants.APP)
    }
  }

  handleSignIn = () => {
    const { email, password } = this.state
    if (email && password) {
      this.props.signIn(email, password)
    }
  }

  handleNavigation = () => {
    this.props.navigation.navigate(navigationConstants.REGISTER)
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
        <Button
          title='I don`t have an account'
          onPress={this.handleNavigation}
          color={themeConstants.PRIMARY_COLOR}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { fetching, user, error } = state.loginUser
  return { fetching, user, error }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(authenticationActions.signIn(email, password))
  }
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
