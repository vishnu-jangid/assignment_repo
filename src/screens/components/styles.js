import {StyleSheet} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  mainCardView: {
    height: vs(90),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(12),
    marginVertical: vs(6),
    marginHorizontal: s(12),
  },

  itemText: {
    fontSize: ms(15),
    fontWeight: 500,
    paddingVertical: vs(4),
  },

  button: {
    width: s(45),
    height: vs(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#81a135',
    marginVertical: vs(4),
  },

  hitSlop: {
    top: 10,
    bottom: 10,
    left: 15,
    right: 15,
  },

  btnText: {
    fontSize: ms(12),
    color: '#fff',
    fontWeight: '600',
  },
});
