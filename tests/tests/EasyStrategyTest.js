QUnit.module( "Easy strategy Tests" );

QUnit.test( "Easy strategy initialization", function ( assert ) {
  var es = new EasyStrategy();
  assert.ok(es instanceof EasyStrategy);
} );