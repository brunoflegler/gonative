import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  author: {
    color: colors.dark,
    fontSize: 14,
    marginTop: 3,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.basePadding,
  },

  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  more: {
    color: colors.regular,
  },
  thumbnail: {
    borderRadius: metrics.baseRadius * 14,
    height: 56,
    width: 56,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
