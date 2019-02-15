import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  author: {
    color: colors.dark,
    fontSize: 12,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    paddingHorizontal: metrics.basePadding,
    ...ifIphoneX(
      {
        height: 74,
        paddingBottom: metrics.basePadding,
      },
      {
        height: 54,
      },
    ),
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  controlsIcon: {
    color: colors.white,
  },
  currentSong: {
    flex: 1,
  },
  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
  title: {
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
