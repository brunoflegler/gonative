import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  author: {
    color: colors.whiteTransparent,
    fontSize: 18,
    marginTop: metrics.baseMargin / 2,
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  thumbnail: {
    height: 120,
    width: '100%',
  },
  thumbnailContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
