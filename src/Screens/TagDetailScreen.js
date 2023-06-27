import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

function TagDetailScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>Tag Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default TagDetailScreen;