import {StyleSheet} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputStyle: {
    marginVertical: vs(10),
    marginHorizontal: s(10),
    borderRadius: 10,
    borderWidth: s(1),
    paddingHorizontal: s(20),
    fontSize: ms(15),
    letterSpacing: 0.59,
    color: '#000',
    height: vs(34),
  },
  saveBtn: {
    height: vs(35),
    borderRadius: 10,
    marginTop: vs(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42db6b',
    marginHorizontal: s(10),
  },

  btnText: {
    fontSize: ms(18),
    fontWeight:'700',
    color:'#fff'
  }
});
