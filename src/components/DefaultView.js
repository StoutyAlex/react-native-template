import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const DefaultView = ({
  children,
  background,
  barStyle,
  keyboardAvoidView,
  styleView,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={barStyle} backgroundColor={background} animated />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={null}
        enabled={keyboardAvoidView}>
        <View style={[{ flex: 1 }, { backgroundColor: background }, styleView]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

DefaultView.propTypes = {
  background: PropTypes.string,
  barStyle: PropTypes.oneOf(['light-content', 'dark-content']),
  styleView: PropTypes.object,
};

DefaultView.defaultProps = {
  keyboardAvoidView: true,
  barStyle: 'light-content',
};

export default DefaultView;
