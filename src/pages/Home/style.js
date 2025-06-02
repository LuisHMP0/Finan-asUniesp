import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 43,
    left: 20,
    padding: 10,
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
    zIndex: 10,
  },
  bar: {
    width: 25,
    height: 3,
    backgroundColor: '#000',
    marginVertical: 2,
    borderRadius: 2,
  },
});
