import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  headerRight: {
    marginRight: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
