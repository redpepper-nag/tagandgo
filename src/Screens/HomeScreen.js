import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import NfcManager from 'react-native-nfc-manager';

function HomeScreen(props) {
  const {navigation} = props;
  const [hasNfc, setHasNfc] = React.useState(null);
  const [enabled, setEnabled] = React.useState(null);

React.useEffect(() => {
  async function checkNfc() {
    const supported = await NfcManager.isSupported();
    if (supported) {
      await NfcManager.start();
      setEnabled(await NfcManager.isEnabled());
    }
    setHasNfc(supported);
  }
  checkNfc();
}, []);

function renderNfcButtons() {
  return (
    <View style={styles.bottom}>
        <Button mode="contained" style={[styles.btn]}
          onPress={() => {
            navigation.navigate('Tag')
          }}
          >
          TAP
        </Button>
        <Button mode="contained" style={styles.btn}>
          LINK
        </Button>
      </View>
  )
}

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Text style={styles.bannerText}>Tap-And-Go</Text>
      </View>
        {renderNfcButtons()}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 42,
    textAlign: 'center',
  },
  bottom: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  btn: {
    width: 250,
    marginBottom: 15,
  },
});

export default HomeScreen;