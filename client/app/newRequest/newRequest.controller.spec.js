'use strict';

describe('Controller: NewRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('styley2App'));

  var NewRequestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewRequestCtrl = $controller('NewRequestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
