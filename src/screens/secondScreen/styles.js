import {StyleSheet} from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';

export default StyleSheet.create({
  emptyViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchInput: {
    backgroundColor: '#F9F9FF'
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  item: {
    width: '50%',
    borderBottomWidth:s(.2),
    paddingVertical:vs(10),
    paddingHorizontal:s(10)
  }
});
