import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.regular,
    fontSize: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    margin: metrics.baseMargin - 5,
    padding: metrics.basePadding - 5,
  },
  image: {
    height: 70,
    width: 48,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: metrics.baseMargin - 5,
  },
  name: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  picker: {
    color: colors.regular,
    height: 50,
    scaleX: 0.8,
    scaleY: 0.8,
    width: 85,
  },
  pickerItem: {
    fontSize: 10,
  },
  price: {
    color: colors.secundary,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
