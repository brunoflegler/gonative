import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  info: {
    flex: 1,
    margin: metrics.baseMargin,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  login: {
    fontSize: 12,
    color: colors.light,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: metrics.baseRadius * 25,
  },
});

export default styles;
