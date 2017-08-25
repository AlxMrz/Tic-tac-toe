QUnit.module( "Hard strategy Tests" );

QUnit.test( "Hard strategy initialization", function ( assert ) {
  var hs = new HardStrategy();
  assert.ok(hs instanceof HardStrategy);
} );