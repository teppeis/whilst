'use strict';

const assert = require('assert');
const whilst = require('../');

describe('whilst', () => {
  it('with a sync action', done => {
    let result = [];
    let i = 0;
    whilst(() => i < 3, () => {
      result.push(i);
      return i++;
    }).then(finalResult => {
      assert.deepEqual(result, [0, 1, 2]);
      assert(finalResult === 2);
      done();
    });
  });

  it('with an async action', done => {
    let result = [];
    let i = 0;
    whilst(() => i < 3, () => {
      result.push(i);
      return Promise.resolve(i++);
    }).then(finalResult => {
      assert.deepEqual(result, [0, 1, 2]);
      assert(finalResult === 2);
      done();
    });
  });

  it('with an async error', done => {
    let result = [];
    let i = 0;
    whilst(() => i < 3, () => Promise.resolve().then(() => {
      if (i > 1) {
        throw new Error('foo');
      }
      result.push(i);
      return i++;
    })).catch(e => {
      assert.deepEqual(result, [0, 1]);
      assert(e instanceof Error);
      assert(e.message === 'foo');
      done();
    });
  });
});
