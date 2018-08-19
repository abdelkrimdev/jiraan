import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { authenticationActions } from '../actions/authentication.actions'
import InputField from '../components/input-field.component'
import { navigationConstants } from '../constants/navigation.constants'
import { themeConstants } from '../constants/theme.constants'

export class CreateAccount extends Component {
  static navigationOptions = {
    title: 'Create Account'
  }

  state = {
    username: '',
    email: '',
    password: ''
  }

  componentWillUpdate (nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate(navigationConstants.APP)
    }
  }

  handleSignUp = () => {
    const { email, password } = this.state
    if (email && password) {
      this.props.signUp(email, password)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <InputField
          placeholder='my-username'
          onChangeText={(username) => this.setState({username})}
        />
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
          title='Sign Up'
          onPress={this.handleSignUp}
          color={themeConstants.PRIMARY_COLOR}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { fetching, user, error } = state.createUser
  return { fetching, user, error }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(authenticationActions.signUp(email, password))
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
