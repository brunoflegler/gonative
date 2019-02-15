import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.regular,
    fontSize: 10,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    margin: metrics.baseMargin - 10,
    minHeight: 300,
    padding: metrics.basePadding - 5,
  },
  image: {
    height: 200,
  },
  name: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: colors.secundary,
    fontWeight: 'bold',
  },
});

export default styles;
