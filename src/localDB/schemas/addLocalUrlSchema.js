export const ADDLOCALURL = 'AddLocalUrl';

export const AddLocalUrlSchema = {
  name: ADDLOCALURL,
  primaryKey: 'id',
  properties:{
    id: 'string',
    url: 'string?',
    status: 'string?'
  }
};
