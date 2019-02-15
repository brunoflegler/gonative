import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.regular,
    fontSize: 13,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    height: 50,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    color: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  containerImage: {
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 100,
  },
  info: {},
  name: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: colors.secundary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
