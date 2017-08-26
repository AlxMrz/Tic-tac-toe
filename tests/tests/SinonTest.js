 'use strict';
QUnit.module( "Sinon Tests" );

function TEST() {
  this.gr = function () {
    return 'GOOD';
  }
}
function fakeFunc() {
  return 'bad';
}

QUnit.test( "Test used fake function", function ( assert ) {
  var test = new TEST();
  var stub = sinon.stub( test, 'gr' ).callsFake( function(){
    return 'bad';
  });
  var result = test.gr();
  assert.equal( result,'bad','BAD is result of fake function' );
} );


