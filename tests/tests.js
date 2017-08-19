QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
QUnit.test("RETURNING FIVE", function( assert ) {
  assert.ok(TestFunction() == 5, "FIVE RETURNED"); 
});