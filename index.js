'use strict';

function resolve(fn) {
  return new Promise(res => {
    res(fn());
  });
}

function whilst(condition, action) {
  return resolve(function loop(res) {
    return resolve(() => {
      if (condition()) {
        return resolve(() => action()).then(loop);
      } else {
        return res;
      }
    });
  });
}

module.exports = whilst;
