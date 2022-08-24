import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 20,
      paddingTop: 40
    },
    subTitle: {
      color: 'gray',
      fontSize: 18
    }, 
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        padding: 16,
        marginRight: 12,
        color: '#FFF',
        fontSize: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  });