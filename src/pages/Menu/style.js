import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)', // fundo semitransparente
    zIndex: 10,
  },
    menuBox: {  
      width: '50%',   
      height: '100%',
      backgroundColor: 'white',
      padding: 20,
  },

  text: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

});
