import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { navigationConstants } from '../constants/navigation.constants'

export class Splash extends Component {
  static propTypes = {
    authenticatedUser: PropTypes.object
  }

  componentWillUpdate (nextProps) {
    this.props.navigation.navigate(
      nextProps.authenticatedUser ? navigationConstants.APP : navigationConstants.AUTH
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps)(Splash)
