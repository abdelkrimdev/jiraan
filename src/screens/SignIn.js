import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

export class SignIn extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>SignIn Screen</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
