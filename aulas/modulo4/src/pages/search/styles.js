import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  form: {
    borderBottomColor: colors.secundary,
    borderBottomWidth: 1,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.baseMargin,
  },
  searchInput: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    color: colors.white,
    height: 42,
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
