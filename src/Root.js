import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MainNavigator from './navigation';
import * as LocalDB from './localDB/realm';
import {addAction, addUrlAction} from './store/main/actions';
import { isReachable } from './utils/serverStatus';

const Root = ({addLocal, addUrlAction}) => {
  useEffect(() => {
    const response = LocalDB.getLocal();
    const responseUrl = LocalDB.getLocalUrl();
    if (response) {
      addLocal(response);
    }

    if(responseUrl) {
      addUrlAction(responseUrl)
    }
  }, []);

  useEffect(() => {
    const MINUTE_MS = 60000;
    const interval = setInterval(() => {
      checkStatus()
    }, MINUTE_MS);
    return () => clearInterval(interval); 
  }, [])

  const checkStatus = async () => {
    const response = LocalDB.getLocalUrl();
      
    if (response?.length > 0) {
      for (const item of response) {
        try {
          let resp = await isReachable(item.url);
          if (resp === true) {
            let data = {
              id: item.id,
              status: 'SUCCESS',
            };
            LocalDB.updateLocalUrl(data);
          } else {
            let data = {
              id: item.id,
              status: 'FAILURE',
            };
            LocalDB.updateLocalUrl(data);
          }
         } catch(error) {
          console.error(error);
        }  
      }
    }
  }

    useEffect(() => {
      console.log("!!!@@@!!!!");
    const MINUTE_MS = 200;

    const interval = setInterval(async() => {
     

      // console.log('Logs every minute');
    }, MINUTE_MS);
  
    return () => clearInterval(interval);
  }, [])

  return <MainNavigator />;
};

const mapDispatchToProps = dispatch => {
  return {
    addLocal: data => dispatch(addAction(data)),
    addUrlAction: data => dispatch(addUrlAction(data)),
  };
};
export default connect(null, mapDispatchToProps)(Root);
