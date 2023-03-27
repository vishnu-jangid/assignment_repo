import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  mainCardView: {
    height: vs(100),
    justifyContent: 'center',
    paddingHorizontal: s(12),
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: vs(6),
    marginHorizontal: vs(12),
  },
});
