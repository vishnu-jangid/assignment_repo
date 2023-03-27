import Realm from 'realm';
import _ from 'lodash';

import {AddLocalSchema, ADDLOCAL} from './schemas';

export const realm = new Realm({
  path: 'TestProject.realm',
  schema: [AddLocalSchema],
  // schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
});

//Add user data
export const addLocal = data => {
  realm.write(() => {
    realm.create(ADDLOCAL, data, Realm.UpdateMode.Modified);
  });
};

//GET CURRENT USER
export const getLocal = () => {
  // let allData = null;
  let localData = realm.objects(ADDLOCAL);
  // if (localData?.length > 0) {
  //   localData.forEach(e => {
  //     allData = e;
  //   });
  // }
  return localData;
};

export const deleteAll = _user => {
  realm.write(() => {
    realm.deleteAll();
  });
};

export const updateUserLocal = data => {
  let localData = realm.objects(ADDLOCAL).filtered(' ( id = $0 )', data.id)
  if(localData?.length > 0) {
    realm.write(() => {
      localData[0].id = data?.id;
      localData[0].columnName = data?.columnName;
      localData[0].tableName = data?.tableName;
      localData[0].uniqueName = data?.uniqueName;
    })
  }
};

export const deleteUserLocal = id => {
  let localData = realm.objects(ADDLOCAL).filtered(' ( id = $0 )', id)
  console.log("localData: ", localData);
  realm.write(() => {
    realm.delete(localData[0])
  });
};
