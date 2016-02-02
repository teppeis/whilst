'use strict';

const assert = require('power-assert');
const whilst = require('../');

describe('whilst', () => {
  it('should be a function', () => {
    assert(typeof whilst === 'function');
  });

  it('with a sync action', () => {
    let result = [];
    let i = 0;
    return whilst(() => i < 3, () => {
      result.push(i);
      return i++;
    }).then(finalResult => {
      assert.deepEqual(result, [0, 1, 2]);
      assert.equal(finalResult, 2);
    });
  });

  it('with an async action', () => {
    let result = [];
    let i = 0;
    return whilst(() => i < 3, () => {
      return Promise.resolve().then(() => {
        result.push(i);
        return i++;
      });
    }).then(finalResult => {
      assert.deepEqual(result, [0, 1, 2]);
      assert.equal(finalResult, 2);
    });
  });

  it('with an async error', (done) => {
    let result = [];
    let i = 0;
    return whilst(() => i < 3, () => {
      return Promise.resolve().then(() => {
        if (i > 1) {
          throw new Error('foo');
        }
        result.push(i);
        return i++;
      });
    }).catch(e => {
      assert.deepEqual(result, [0, 1]);
      assert(e instanceof Error);
      assert.equal(e.message, 'foo');
      done();
    });
  });
});
