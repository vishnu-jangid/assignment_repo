export const ADDLOCAL = 'AddLocal';

export const AddLocalSchema = {
  name: ADDLOCAL,
  primaryKey: 'id',
  properties:{
    id: 'string',
    tableName: 'string?',
    uniqueName: 'string?',
    columnName: 'string?'
  }
};
