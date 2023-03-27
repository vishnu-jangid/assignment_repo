import {StyleSheet} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: s(80),
    height: vs(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#81a135',
    marginVertical: vs(4),
  },

  btnText: {
    fontSize: ms(12),
    color: '#fff',
    fontWeight: '600',
  },
});
