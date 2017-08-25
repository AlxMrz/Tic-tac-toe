QUnit.module( "Normal strategy Tests" );

QUnit.test( "Normal strategy initialization", function ( assert ) {
  var ns = new NormalStrategy();
  assert.ok(ns instanceof NormalStrategy);
} );