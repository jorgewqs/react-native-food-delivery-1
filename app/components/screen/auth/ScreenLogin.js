	import React, {Component} from 'react';
  import {View, StyleSheet} from 'react-native';

  class ScreenLogin extends Component {
    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {flex: 1},
  });

  export default ScreenLogin;