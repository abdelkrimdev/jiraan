import React, { Component } from 'react'
import { Button, Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { authenticationActions } from '../actions/authentication.actions'
import { navigationConstants } from '../constants/navigation.constants'
import { themeConstants } from '../constants/theme.constants'

export class Home extends Component {
  static propTypes = {
    authenticatedUser: PropTypes.object,
    signOut: PropTypes.func
  }

  handleSignOut = () => {
    this.props.signOut()
    this.props.navigation.navigate(navigationConstants.AUTH)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello: {this.props.authenticatedUser.email}</Text>
        <Button
          title='Sign Out'
          onPress={this.handleSignOut}
          color={themeConstants.PRIMARY_COLOR}
        />
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
    signOut: () => dispatch(authenticationActions.signOut())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
