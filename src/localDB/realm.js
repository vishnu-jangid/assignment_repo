import Realm from 'realm';
import _ from 'lodash';

import {AddLocalSchema, ADDLOCAL, AddLocalUrlSchema, ADDLOCALURL} from './schemas';

export const realm = new Realm({
  path: 'TestProject.realm',
  schema: [AddLocalSchema, AddLocalUrlSchema],
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
  let localData = realm.objects(ADDLOCAL);
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
  realm.write(() => {
    realm.delete(localData[0])
  });
};

//Add local url 
export const addLocalUrl = data => {
  realm.write(() => {
    realm.create(ADDLOCALURL, data, Realm.UpdateMode.Modified);
  });
};

export const getLocalUrl = () => {
  let localData = realm.objects(ADDLOCALURL);
  return localData;
};

export const updateLocalUrl = data => {
  console.log("!!!@@@######", data);
  let localData = realm.objects(ADDLOCALURL).filtered(' ( id = $0 )', data.id)
  if(localData?.length > 0) {
    realm.write(() => {
      localData[0].id = data?.id;
      localData[0].status = data?.status;
    })
  }
};