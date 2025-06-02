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
    transactionText: {
    fontSize: 14,
    marginBottom: 5,
  },

  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  balanceCard: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  balanceValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionIcon: {
    marginRight: 5,
    fontSize: 18,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionItem: {
    backgroundColor: '#f1f3ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  tagContainer: {
    marginBottom: 5,
  },
  tag: {
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  transactionValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  width: '100%',
},
balanceCard: {
  flex: 1,
  padding: 15,
  borderRadius: 8,
  marginHorizontal: 4, // Diminua para caber 3
},
balanceCardScroll: {
  width: 180,
  height: 100,
  borderRadius: 10,
  padding: 15,
  marginRight: 10,
  justifyContent: 'center',
},
balanceCardScroll: {
  width: 180,
  height: 100,
  borderRadius: 10,
  padding: 15,
  marginRight: 12,
  justifyContent: 'center',
},



  
});
