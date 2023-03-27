import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MainNavigator from './navigation';
import * as LocalDB from './localDB/realm';
import {addAction} from './store/main/actions';

const Root = ({addLocal}) => {
  useEffect(() => {
    const response = LocalDB.getLocal();
    if (response) {
      addLocal(response);
    }
  }, []);

  return <MainNavigator />;
};

const mapDispatchToProps = dispatch => {
  return {
    addLocal: data => dispatch(addAction(data)),
  };
};
export default connect(null, mapDispatchToProps)(Root);
