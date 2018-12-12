import { StyleSheet } from 'react-native';
import { colors } from 'styles/globals';

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: colors.ligthgrey,
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthgrey,
    paddingBottom: 10,
  },
  description: {
    marginTop: 15,
    fontSize: 14,
    color: colors.darkgrey,
  },
});

export default styles;
