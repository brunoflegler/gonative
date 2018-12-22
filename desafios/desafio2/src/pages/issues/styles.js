import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding / 2,
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius * 2,
  },
  options: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.regular,
  },
  titleActive: {
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default styles;
