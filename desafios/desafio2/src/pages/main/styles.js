import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  form: {
    flexDirection: 'row',
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
  },

  add: {
    marginLeft: metrics.baseMargin * 2,
  },

  separator: {
    backgroundColor: colors.light,
    height: 1,
    width: metrics.screewWidth,
    marginHorizontal: metrics.baseMargin * 2,
  },
});

export default styles;
