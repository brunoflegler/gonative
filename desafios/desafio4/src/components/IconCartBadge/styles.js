import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.secundary,
    borderRadius: 50,
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    height: 18,
    lineHeight: 18,
    position: 'absolute',
    right: -12,
    textAlign: 'center',
    top: -8,
    width: 18,
  },
  container: {
    position: 'relative',
  },
});

export default styles;
