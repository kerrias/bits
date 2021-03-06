/**
Copyright 2017 LGS Innovations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
(() => {
  'use strict';

  const os = require('os');
  const chai = require('chai');
  const chaiAsPromised = require('chai-as-promised');

  global.paths = global.paths || {};
  global.paths = Object.assign(global.paths, {data: os.tmpdir()});

  const BitsId = require('./../lib/system/bits-id');

  const expect = chai.expect;

  chai.use(chaiAsPromised);

  describe('BitsId', () => {
    let bitsId = null;

    beforeEach('Create BitsId', () => {
      bitsId = new BitsId();
    });

    describe('checkGenerateId', () => {
      it('should return the equivalent to os.hostname', () => {
        return bitsId._generateId()
        .then((bitsId) => {
          expect(bitsId).to.equal(os.hostname());
        });
      });
    });
  });
})();
