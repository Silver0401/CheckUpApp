import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  fullContainer: {
    width: '100%',
    height: '100%',
  },
  genericButton: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#22576d',
    fontWeight: 'bold',
  },
  genericButton2: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#22576d',
    fontWeight: 'bold',
    color: 'white',
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  border2: {
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  smallBox: {
    width: 300,
    height: 300,
  },
  borderRadius: {
    borderRadius: 25,
  },
  h1: {
    fontSize: 50,
  },
  h2: {
    fontSize: 25,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 15,
  },
  p: {
    fontSize: 10,
  },
});

export {styles};
