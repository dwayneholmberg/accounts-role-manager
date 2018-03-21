/* global describe it expect */

import 'meteor/practicalmeteor:chai';

import Arm from 'meteor/othermachines:accounts-role-manager';

const Users = Arm();

describe('accounts-role-manager', function () {
  it('provides a user count', function () {
    expect(Users.count()).to.equal(4);
  });
});
