/**
 * TestCounter.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'TestCounter',
  attributes: {
    counter: { type: 'number' },
    key: { type: 'string' }
  },

};

