import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  containerSubtotal: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 70,
    justifyContent: 'center',
  },
  empty: {
    alignItems: 'center',
    flex: 1,
    marginTop: metrics.baseMargin,
  },
  emptyText: {
    color: colors.regular,
    fontStyle: 'italic',
  },
  emptyTextBack: {
    color: colors.regular,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtotal: {
    color: colors.regular,
  },
  total: {
    color: colors.secundary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
