import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { authenticationActions } from '../actions/authentication.actions'
import { themeConstants } from '../constants/theme.constants'

export class Home extends Component {
  handleSignOut = () => {
    this.props.signOut()
  }

  render () {
    return (
      <View style={styles.container}>
        <Button
          title='Sign Out'
          onPress={this.handleSignOut}
          color={themeConstants.PRIMARY_COLOR}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authenticationActions.signOut())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
