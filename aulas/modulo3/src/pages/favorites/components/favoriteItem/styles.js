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
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  avatar: {
    height: 50,
    width: 54,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },
  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
