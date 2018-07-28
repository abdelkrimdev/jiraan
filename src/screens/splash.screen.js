import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { authenticationActions } from '../actions/authentication.actions'
import { navigationConstants } from '../constants/navigation.constants'

export class Splash extends Component {
  static propTypes = {
    authenticatedUser: PropTypes.object,
    getAuthenticatedUser: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.getAuthenticatedUser()
  }

  componentDidMount () {
    this.props.navigation.navigate(
      this.props.authenticatedUser ? navigationConstants.APP : navigationConstants.AUTH
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { data } = state.currentUser
  return { authenticatedUser: data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthenticatedUser: () => dispatch(authenticationActions.getCurrentUser())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)